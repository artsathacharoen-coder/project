import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, Copy, Check, Info, ArrowUpRight, RotateCcw, ShieldCheck, Ruler, Clock } from 'lucide-react';
import { MPN_COMPANY } from '../data/mpnData';

interface FacilityPreset {
  id: string;
  name: string;
  description: string;
  recommendedPanel: string;
  recommendedFloor: string;
}

const FACILITY_PRESETS: FacilityPreset[] = [
  {
    id: 'pharma',
    name: 'Cleanroom Farmasi (cGMP / ISO 7-8)',
    description: 'Sediaan steril, ruang timbang, packaging primer farmasi.',
    recommendedPanel: 'pir_75',
    recommendedFloor: 'esd_epoxy',
  },
  {
    id: 'electronics',
    name: 'Pabrik Elektronik / SMT / PCB',
    description: 'Perakitan komponen mikro, kontrol ketat electrostatic discharge.',
    recommendedPanel: 'pir_50',
    recommendedFloor: 'esd_epoxy',
  },
  {
    id: 'coldstorage',
    name: 'Cold Storage / Freezer (-20°C)',
    description: 'Penyimpanan daging, ikan, vaksin, dan logistik beku.',
    recommendedPanel: 'pir_100',
    recommendedFloor: 'none',
  },
  {
    id: 'datacenter',
    name: 'Data Center / Ruang Server',
    description: 'Proteksi server dari listrik statis dan insulasi debu.',
    recommendedPanel: 'rockwool_100',
    recommendedFloor: 'esd_vinyl',
  },
  {
    id: 'food',
    name: 'Pengolahan Makanan (HACCP)',
    description: 'Area produksi higienis bebas bakteri & jamur.',
    recommendedPanel: 'pir_50',
    recommendedFloor: 'epoxy_standard',
  },
];

export const InteractiveCalculator: React.FC = () => {
  // Facility type
  const [selectedFacility, setSelectedFacility] = useState<string>('pharma');

  // Dimensions
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(8);
  const [height, setHeight] = useState<number>(3.0);

  // Scope toggles
  const [includeWalls, setIncludeWalls] = useState<boolean>(true);
  const [includeCeiling, setIncludeCeiling] = useState<boolean>(true);
  const [panelType, setPanelType] = useState<string>('pir_75');

  const [includeFloor, setIncludeFloor] = useState<boolean>(true);
  const [floorType, setFloorType] = useState<string>('esd_epoxy');

  // Accessories
  const [doorCount, setDoorCount] = useState<number>(2);
  const [windowCount, setWindowCount] = useState<number>(4);
  const [includeCoving, setIncludeCoving] = useState<boolean>(true);
  const [includeGroundingGrid, setIncludeGroundingGrid] = useState<boolean>(true);

  // UI state
  const [copied, setCopied] = useState<boolean>(false);

  // Calculations
  const calculations = useMemo(() => {
    const floorArea = Math.round(length * width);
    const perimeter = Math.round(2 * (length + width));
    const wallArea = Math.round(perimeter * height);
    const ceilingArea = Math.round(length * width);

    // Coving length in meters (perimeter + 4 vertical room corners)
    const covingLength = perimeter + (4 * height);

    // Panel sheet estimation (standard effective width 1.15m)
    let totalPanelArea = 0;
    if (includeWalls) totalPanelArea += wallArea;
    if (includeCeiling) totalPanelArea += ceilingArea;
    const estimatedPanelSheets = Math.ceil(totalPanelArea / (1.15 * (height > 3 ? height : 3)));

    // Cost estimation per m2 in IDR (approximate contractor range)
    let panelCostPerM2 = 0;
    if (panelType === 'pir_50') panelCostPerM2 = 420000;
    else if (panelType === 'pir_75') panelCostPerM2 = 490000;
    else if (panelType === 'pir_100') panelCostPerM2 = 590000;
    else if (panelType === 'rockwool_100') panelCostPerM2 = 580000;
    else if (panelType === 'eps_50') panelCostPerM2 = 310000;

    let floorCostPerM2 = 0;
    if (floorType === 'esd_epoxy') floorCostPerM2 = 340000; // Conductive ESD Epoxy 2.5mm
    else if (floorType === 'esd_vinyl') floorCostPerM2 = 390000; // ESD Dissipative Vinyl Tile 2.5mm
    else if (floorType === 'epoxy_standard') floorCostPerM2 = 180000; // Heavy duty standard epoxy

    // Accessories cost
    const doorCost = doorCount * 6500000; // Hermetic cleanroom door
    const windowCost = windowCount * 1800000; // Double glass flush cleanroom window
    const covingCost = includeCoving ? covingLength * 65000 : 0;
    const groundingCost = (includeFloor && includeGroundingGrid && floorType.startsWith('esd')) ? floorArea * 45000 : 0;

    // Base subtotal
    const panelsTotal = totalPanelArea * panelCostPerM2;
    const flooringTotal = includeFloor ? floorArea * floorCostPerM2 : 0;
    const accessoriesTotal = doorCost + windowCost + covingCost + groundingCost;

    const grandTotalMin = Math.round((panelsTotal + flooringTotal + accessoriesTotal) * 0.95);
    const grandTotalMax = Math.round((panelsTotal + flooringTotal + accessoriesTotal) * 1.15);

    // Estimated work duration in days
    const totalWorkVolume = totalPanelArea + (includeFloor ? floorArea : 0);
    let estimatedDays = Math.ceil(totalWorkVolume / 60) + (includeFloor ? 3 : 0) + 2;
    if (estimatedDays < 4) estimatedDays = 4;
    if (estimatedDays > 45) estimatedDays = 45;

    return {
      floorArea,
      perimeter,
      wallArea,
      ceilingArea,
      totalPanelArea,
      estimatedPanelSheets,
      covingLength: Math.round(covingLength),
      grandTotalMin,
      grandTotalMax,
      estimatedDays,
    };
  }, [length, width, height, includeWalls, includeCeiling, panelType, includeFloor, floorType, doorCount, windowCount, includeCoving, includeGroundingGrid]);

  const handleFacilityChange = (presetId: string) => {
    setSelectedFacility(presetId);
    const preset = FACILITY_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      if (preset.recommendedPanel) setPanelType(preset.recommendedPanel);
      if (preset.recommendedFloor === 'none') {
        setIncludeFloor(false);
      } else {
        setIncludeFloor(true);
        setFloorType(preset.recommendedFloor);
      }
    }
  };

  const formatCurrency = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const getPanelName = (type: string) => {
    switch (type) {
      case 'pir_50': return 'Sandwich Panel PIR 50mm (Fire Retardant B1)';
      case 'pir_75': return 'Sandwich Panel PIR 75mm (Standar cGMP / Cleanroom)';
      case 'pir_100': return 'Sandwich Panel PIR 100mm (Cold Storage / Freezer)';
      case 'rockwool_100': return 'Sandwich Panel Rockwool 100mm (Tahan Api Class A1)';
      case 'eps_50': return 'Sandwich Panel EPS 50mm (Ekonomis)';
      default: return type;
    }
  };

  const getFloorName = (type: string) => {
    switch (type) {
      case 'esd_epoxy': return 'Lantai Antistatik ESD Epoxy Conductive 2.5mm (10⁴-10⁶ Ω)';
      case 'esd_vinyl': return 'Lantai ESD Dissipative Vinyl Homogeneous 2.5mm (10⁶-10⁹ Ω)';
      case 'epoxy_standard': return 'Epoxy Lantai Heavy Duty Standard non-ESD';
      default: return type;
    }
  };

  const generateSummaryText = () => {
    const facility = FACILITY_PRESETS.find((f) => f.id === selectedFacility)?.name || selectedFacility;
    return `*KONSULTASI ESTIMASI RAB - MPN PROJECT*
----------------------------------------
*Jenis Fasilitas:* ${facility}
*Dimensi Ruangan:* ${length}m x ${width}m x Tinggi ${height}m
*Luas Lantai:* ${calculations.floorArea} m²
*Luas Plafon:* ${calculations.ceilingArea} m²
*Luas Dinding Panel:* ${includeWalls ? calculations.wallArea + ' m²' : 'Tidak Dihitung'}
*Total Luas Panel:* ${calculations.totalPanelArea} m² (~${calculations.estimatedPanelSheets} lembar)
*Tipe Sandwich Panel:* ${getPanelName(panelType)}
*Sistem Lantai:* ${includeFloor ? getFloorName(floorType) : 'Tidak Termasuk'}
*Aksesoris:*
• Pintu Cleanroom Hermetic: ${doorCount} unit
• Jendela Double Glass Flush: ${windowCount} unit
• Coving Alumunium R-50: ${includeCoving ? `${calculations.covingLength} meter` : 'Tidak'}
• Copper Tape Grounding Grid: ${includeGroundingGrid ? 'Ya (Terhubung Pentanahan)' : 'Tidak'}

*Perkiraan Waktu Kerja:* ± ${calculations.estimatedDays} Hari Kerja
*Estimasi Rentang Biaya:* ${formatCurrency(calculations.grandTotalMin)} – ${formatCurrency(calculations.grandTotalMax)}
----------------------------------------
_Mohon jadwalkan survei lokasi teknis dan penawaran resmi dari MPN Project._`;
  };

  const handleSendToWhatsApp = () => {
    const text = generateSummaryText();
    const url = `https://wa.me/${MPN_COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setLength(12);
    setWidth(8);
    setHeight(3.0);
    setIncludeWalls(true);
    setIncludeCeiling(true);
    setPanelType('pir_75');
    setIncludeFloor(true);
    setFloorType('esd_epoxy');
    setDoorCount(2);
    setWindowCount(4);
    setIncludeCoving(true);
    setIncludeGroundingGrid(true);
    setSelectedFacility('pharma');
  };

  return (
    <section id="kalkulator" className="py-20 bg-slate-900 text-white scroll-mt-12 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            Simulasi & Estimasi Biaya Online
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Kalkulator RAB Cleanroom & Lantai ESD
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Dapatkan estimasi kebutuhan material modular, waktu pengerjaan, dan perkiraan biaya proyek Anda secara transparan. 
            Hasil perhitungan dapat langsung dikirim ke konsultan teknis kami untuk survei lokasi gratis.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Configurator Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Pilih Preset Fasilitas */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                01. Pilih Jenis Fasilitas / Kebutuhan
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FACILITY_PRESETS.map((preset) => {
                  const isActive = selectedFacility === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleFacilityChange(preset.id)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all ${
                        isActive
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-sm'
                          : 'bg-slate-900/40 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{preset.name}</span>
                        {isActive && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {preset.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Dimensi Ruangan */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  02. Dimensi Ruangan (Meter)
                </label>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Default</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                    <span>Panjang (P)</span>
                    <span className="font-mono text-white font-bold">{length} m</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="60"
                    step="1"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                    <span>Lebar (L)</span>
                    <span className="font-mono text-white font-bold">{width} m</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="40"
                    step="1"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                    <span>Tinggi (T)</span>
                    <span className="font-mono text-white font-bold">{height.toFixed(1)} m</span>
                  </div>
                  <input
                    type="range"
                    min="2.4"
                    max="8.0"
                    step="0.2"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculated Quick Dimensions */}
              <div className="pt-2 border-t border-slate-700/60 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded bg-slate-900/50">
                  <span className="text-slate-400 block text-[11px]">Luas Lantai</span>
                  <span className="font-mono font-bold text-white tabular-nums">{calculations.floorArea} m²</span>
                </div>
                <div className="p-2 rounded bg-slate-900/50">
                  <span className="text-slate-400 block text-[11px]">Luas Plafon</span>
                  <span className="font-mono font-bold text-white tabular-nums">{calculations.ceilingArea} m²</span>
                </div>
                <div className="p-2 rounded bg-slate-900/50">
                  <span className="text-slate-400 block text-[11px]">Luas Dinding</span>
                  <span className="font-mono font-bold text-white tabular-nums">{calculations.wallArea} m²</span>
                </div>
              </div>
            </div>

            {/* 3. Spesifikasi Sandwich Panel */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  03. Spesifikasi Sandwich Panel Modular
                </label>
                <div className="flex items-center gap-4 text-xs">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeWalls}
                      onChange={(e) => setIncludeWalls(e.target.checked)}
                      className="rounded accent-blue-500"
                    />
                    <span>Dinding</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeCeiling}
                      onChange={(e) => setIncludeCeiling(e.target.checked)}
                      className="rounded accent-blue-500"
                    />
                    <span>Plafon</span>
                  </label>
                </div>
              </div>

              {(includeWalls || includeCeiling) ? (
                <div className="space-y-2">
                  <select
                    value={panelType}
                    onChange={(e) => setPanelType(e.target.value)}
                    aria-label="Pilih tipe sandwich panel"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="pir_75">PIR 75mm (Standar cGMP Farmasi / ISO Cleanroom B1)</option>
                    <option value="pir_50">PIR 50mm (Ruang Pengolahan Makanan / Partisi Bersih)</option>
                    <option value="pir_100">PIR 100mm (Cold Storage / Freezer Room Suhu Beku)</option>
                    <option value="rockwool_100">Rockwool 100mm (Tahan Api Class A1 & Redam Suara)</option>
                    <option value="eps_50">EPS 50mm (Opsi Ekonomis Partisi Pabrik)</option>
                  </select>

                  <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded border border-slate-700/60">
                    Est. Total Panel: <strong className="text-blue-300 font-mono tabular-nums">{calculations.totalPanelArea} m²</strong> (~{calculations.estimatedPanelSheets} modul lembar panel modular).
                  </div>
                </div>
              ) : (
                <div className="text-xs text-amber-300 bg-amber-950/40 p-2.5 rounded border border-amber-800/50">
                  Panel modular tidak diikutsertakan dalam estimasi ini.
                </div>
              )}
            </div>

            {/* 4. Spesifikasi Lantai Antistatik ESD */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  04. Sistem Lantai Antistatik (ESD)
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={includeFloor}
                    onChange={(e) => setIncludeFloor(e.target.checked)}
                    className="rounded accent-blue-500"
                  />
                  <span>Termasuk Lantai</span>
                </label>
              </div>

              {includeFloor ? (
                <div className="space-y-2">
                  <select
                    value={floorType}
                    onChange={(e) => setFloorType(e.target.value)}
                    aria-label="Pilih sistem lantai antistatik"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="esd_epoxy">ESD Conductive Epoxy Self-Leveling 2.5mm (10⁴ - 10⁶ Ω)</option>
                    <option value="esd_vinyl">ESD Dissipative Vinyl Homogeneous Tile 2.5mm (10⁶ - 10⁹ Ω)</option>
                    <option value="epoxy_standard">Epoxy Standard Heavy Duty non-ESD (2mm)</option>
                  </select>

                  <div className="flex items-center gap-2 pt-1">
                    <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeGroundingGrid}
                        onChange={(e) => setIncludeGroundingGrid(e.target.checked)}
                        className="rounded accent-blue-500"
                      />
                      <span>Instalasi Grid Copper Tape Grounding (Pentanahan &lt; 1 Ω)</span>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded">
                  Pekerjaan lantai tidak diikutsertakan.
                </div>
              )}
            </div>

            {/* 5. Aksesoris Cleanroom */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                05. Aksesoris & Komponen Sanitasi
              </label>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-700/60">
                  <span>Pintu Cleanroom Hermetic</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDoorCount(Math.max(0, doorCount - 1))}
                      className="w-6 h-6 rounded bg-slate-700 text-white font-bold hover:bg-slate-600"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold w-4 text-center">{doorCount}</span>
                    <button
                      type="button"
                      onClick={() => setDoorCount(doorCount + 1)}
                      className="w-6 h-6 rounded bg-slate-700 text-white font-bold hover:bg-slate-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-700/60">
                  <span>Jendela Double Glass Flush</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setWindowCount(Math.max(0, windowCount - 1))}
                      className="w-6 h-6 rounded bg-slate-700 text-white font-bold hover:bg-slate-600"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold w-4 text-center">{windowCount}</span>
                    <button
                      type="button"
                      onClick={() => setWindowCount(windowCount + 1)}
                      className="w-6 h-6 rounded bg-slate-700 text-white font-bold hover:bg-slate-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCoving}
                    onChange={(e) => setIncludeCoving(e.target.checked)}
                    className="rounded accent-blue-500"
                  />
                  <span>Coving Sanitasi Aluminium R-50 (~{calculations.covingLength} m keliling)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Column 2: Live Calculation Summary & Action Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-slate-800 rounded-2xl border-2 border-blue-500/50 p-6 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div>
                  <div className="text-xs font-mono uppercase text-blue-400 font-bold">ESTIMASI_RAB</div>
                  <h3 className="text-lg font-bold text-white">Ringkasan Estimasi Proyek</h3>
                </div>
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Rincian Kuantitas */}
              <div className="py-4 space-y-2.5 text-xs border-b border-slate-700/70">
                <div className="flex justify-between text-slate-300">
                  <span>Luas Lantai:</span>
                  <span className="font-mono font-bold text-white tabular-nums">{calculations.floorArea} m²</span>
                </div>
                {includeWalls && (
                  <div className="flex justify-between text-slate-300">
                    <span>Luas Dinding Panel:</span>
                    <span className="font-mono font-bold text-white tabular-nums">{calculations.wallArea} m²</span>
                  </div>
                )}
                {includeCeiling && (
                  <div className="flex justify-between text-slate-300">
                    <span>Luas Plafon Panel:</span>
                    <span className="font-mono font-bold text-white tabular-nums">{calculations.ceilingArea} m²</span>
                  </div>
                )}
                {(includeWalls || includeCeiling) && (
                  <div className="flex justify-between text-slate-300">
                    <span>Estimasi Modul Panel:</span>
                    <span className="font-mono font-bold text-blue-400 tabular-nums">± {calculations.estimatedPanelSheets} Lembar</span>
                  </div>
                )}
                {includeFloor && (
                  <div className="flex justify-between text-slate-300">
                    <span>Lantai ESD:</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">{calculations.floorArea} m²</span>
                  </div>
                )}
                {includeCoving && (
                  <div className="flex justify-between text-slate-300">
                    <span>Coving Aluminium R-50:</span>
                    <span className="font-mono font-bold text-slate-200 tabular-nums">± {calculations.covingLength} m</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-300">
                  <span>Aksesoris Hermetic:</span>
                  <span className="font-mono font-bold text-slate-200 tabular-nums">{doorCount} Pintu · {windowCount} Jendela</span>
                </div>
              </div>

              {/* Work Duration & Warranty */}
              <div className="py-3 grid grid-cols-2 gap-2 text-xs border-b border-slate-700/70">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Durasi Pengerjaan</div>
                    <div className="font-mono font-bold text-white">± {calculations.estimatedDays} Hari Kerja</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-400">Garansi Pekerjaan</div>
                    <div className="font-mono font-bold text-emerald-400">1 - 3 Tahun</div>
                  </div>
                </div>
              </div>

              {/* Estimated Price Range */}
              <div className="pt-4 pb-2">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                  <span>Estimasi Rentang Biaya (RAB):</span>
                  <span className="text-[11px] text-emerald-400 font-semibold">Survei Gratis</span>
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono tracking-tight tabular-nums">
                  {formatCurrency(calculations.grandTotalMin)}
                </div>
                <div className="text-xs text-slate-400">
                  sampai dengan <span className="font-mono text-slate-300">{formatCurrency(calculations.grandTotalMax)}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  *Estimasi indikatif mencakup material fabrikasi & instalasi. Biaya pasti akan ditentukan setelah survei teknis lokasi gratis di Jabodetabek.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Rincian ke WhatsApp MPN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900/80 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Rincian Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Format Teks RAB</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Trust Callout */}
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/60 text-xs text-slate-300 flex items-start gap-3">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Layanan Survei Gratis Wilayah Jabodetabek</strong>
                Tim insinyur MPN Project siap datang ke pabrik/lokasi Anda untuk pengukuran elevasi, uji kelembaban lantai dasar, dan konsultasi cGMP tanpa biaya.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
