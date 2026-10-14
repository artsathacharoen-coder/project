export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientCategory: 'Cleanroom Farmasi' | 'Lantai ESD' | 'Cold Storage' | 'Data Center';
  location: string;
  area: string;
  duration: string;
  material: string;
  scope: string[];
  outcome: string;
  year: string;
}

export interface PanelMaterialCompare {
  type: string;
  fullName: string;
  density: string;
  thermalConductivity: string;
  fireRating: string;
  waterAbsorption: string;
  bestFor: string;
}

export interface ESDResistanceGrade {
  category: string;
  resistanceRange: string;
  voltageDecay: string;
  materialType: string;
  suitableEnvironments: string[];
}

export const MPN_COMPANY = {
  name: 'MPN Project',
  legalName: 'MPN Project Indonesia',
  tagline: 'Spesialis Sandwich Panel & Lantai Antistatik (ESD)',
  phoneDisplay: '+62 878-1570-1221',
  phoneRaw: '6287815701221',
  whatsappUrl: 'https://wa.me/6287815701221',
  address: 'Jl. Dr. Saharjo No.216 Lantai 1, Tebet, Jakarta Selatan, DKI Jakarta 12870',
  googleMapsUrl: 'https://maps.google.com/?q=Jl.+Dr.+Saharjo+No.216+Tebet+Jakarta+Selatan',
  email: 'info@mpnproject.co.id',
  operationalHours: 'Senin - Sabtu: 08.00 - 18.00 WIB',
  warrantyDuration: '1 - 3 Tahun Garansi Material & Instalasi',
  freeSurveyRegions: 'DKI Jakarta, Bogor, Depok, Tangerang, Bekasi, Karawang (Jabodetabekjur)',
};

export const PANEL_COMPARISON_DATA: PanelMaterialCompare[] = [
  {
    type: 'PIR',
    fullName: 'Polyisocyanurate Foam',
    density: '40 - 45 kg/m³',
    thermalConductivity: '0.020 - 0.022 W/m.K',
    fireRating: 'B1 (Fire Retardant & Self-Extinguishing)',
    waterAbsorption: '< 1.5% Vol',
    bestFor: 'Cleanroom Farmasi (cGMP), Ruang Steril Makanan, Cold Storage Suhu Rendah (-25°C)',
  },
  {
    type: 'PUR / PU',
    fullName: 'Polyurethane Foam',
    density: '38 - 42 kg/m³',
    thermalConductivity: '0.022 - 0.024 W/m.K',
    fireRating: 'B2 (Flame Retardant Standard)',
    waterAbsorption: '< 2.0% Vol',
    bestFor: 'Partisi Ruang Produksi, Gudang Logistik Suhu Terkendali, Chiller Room',
  },
  {
    type: 'Rockwool',
    fullName: 'Mineral Rockwool Fibers',
    density: '100 - 120 kg/m³',
    thermalConductivity: '0.038 - 0.044 W/m.K',
    fireRating: 'Class A1 (Non-Combustible, Tahan Api s/d 2 Jam)',
    waterAbsorption: '< 2.5% Vol',
    bestFor: 'Partisi Tahan Api (Firewall), Ruang Genset/Boiler, Dinding Pembatas Pabrik Berbahaya',
  },
  {
    type: 'EPS',
    fullName: 'Expanded Polystyrene',
    density: '15 - 20 kg/m³',
    thermalConductivity: '0.035 - 0.040 W/m.K',
    fireRating: 'B3 Standard / Retardant Treated',
    waterAbsorption: '< 4.0% Vol',
    bestFor: 'Partisi Standar Ekonomis, Office Partition Pabrik, Packaging Area',
  },
];

export const ESD_RESISTANCE_GRADES: ESDResistanceGrade[] = [
  {
    category: 'Conductive (Konduktif)',
    resistanceRange: '1.0 x 10⁴ – 1.0 x 10⁶ Ohm (Ω)',
    voltageDecay: '< 0.05 detik (Sangat Cepat)',
    materialType: 'ESD Conductive Epoxy Self-Leveling & Conductive Vinyl',
    suitableEnvironments: [
      'Pabrik perakitan semikonduktor & microchip sensitif',
      'Ruang perakitan amunisi & bahan kimia mudah meledak',
      'Pabrik PCB & SMT (Surface Mount Technology)',
      'Ruang operasi rumah sakit & diagnostic lab sensitif',
    ],
  },
  {
    category: 'Dissipative (Disipatif)',
    resistanceRange: '1.0 x 10⁶ – 1.0 x 10⁹ Ohm (Ω)',
    voltageDecay: '< 0.2 detik (Terkontrol & Aman)',
    materialType: 'Static Dissipative Epoxy & Dissipative PVC Tiles',
    suitableEnvironments: [
      'Server Room, Data Center, dan Ruang Kontrol SCADA',
      'Area pengemasan barang elektronik konsumen',
      'Ruang QC & pengujian perangkat telekomunikasi',
      'Laboratorium kalibrasi instrumen kelistrikan',
    ],
  },
  {
    category: 'Insulative (Tidak Disarankan)',
    resistanceRange: '> 1.0 x 10¹² Ohm (Ω)',
    voltageDecay: 'Tidak membuang muatan statis',
    materialType: 'Lantai keramik biasa / Epoxy non-ESD',
    suitableEnvironments: [
      'Berisiko merusak komponen IC dan memicu percikan listrik statis tak kasat mata',
    ],
  },
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'prj-1',
    title: 'Cleanroom Farmasi cGMP Kelas B & C',
    clientCategory: 'Cleanroom Farmasi',
    location: 'Kawasan Industri GIIC, Cikarang',
    area: '1.250 m²',
    duration: '24 Hari Kerja',
    material: 'Sandwich Panel PIR 75mm Antibakteri + Coving Aluminium + Hermetic Door',
    scope: [
      'Instalasi Dinding & Plafon Modular PIR B1',
      'Pemasangan Double Glass Flush Window 6mm',
      'Airtight Interlocking Cleanroom Swing Door',
      'Flushing Coving Aluminium R-50 Sanitasi',
    ],
    outcome: 'Lolos uji partikel ISO 14644-1 Kelas 7 & inspeksi BPOM cGMP untuk lini sediaan steril.',
    year: '2024',
  },
  {
    id: 'prj-2',
    title: 'Lantai Antistatik ESD Epoxy SMT Line',
    clientCategory: 'Lantai ESD',
    location: 'Kawasan Industri KIIC, Karawang Barat',
    area: '2.400 m²',
    duration: '18 Hari Kerja',
    material: 'ESD Conductive Epoxy 2.5mm + Grid Copper Tape Grounding',
    scope: [
      'Shotblasting & Diamond Grinding Substrat Beton',
      'Pemasangan Grid Pita Tembaga Murni 10x10mm',
      'Pelapisan Conductive Primer & Carbon Undercoat',
      'Top Coat ESD Self-Leveling Warna Slate Grey',
    ],
    outcome: 'Resistensi permukaan konsisten 4.5 x 10⁵ Ω, penurunan risiko ESD failure komponen IC hingga 0%.',
    year: '2024',
  },
  {
    id: 'prj-3',
    title: 'Cold Storage Suhu Ekstrem -20°C Frozen Meat',
    clientCategory: 'Cold Storage',
    location: 'Gudang Logistik Modern, Marunda Jakarta Utara',
    area: '850 m²',
    duration: '14 Hari Kerja',
    material: 'Sandwich Panel PIR 100mm Camlock High-Density + Heavy Duty Sliding Door',
    scope: [
      'Pemasangan Dinding & Plafon Insulasi PIR 100mm Camlock',
      'Underfloor Insulation EPS High Density 100mm',
      'Pintu Geser Cold Room dengan Heater Wire Anti-Kondensasi',
      'Pengujian Termal Flir Infrared Camera',
    ],
    outcome: 'Suhu stabil -20°C dengan efisiensi konsumsi listrik kompresor pendingin hemat hingga 28%.',
    year: '2023',
  },
  {
    id: 'prj-4',
    title: 'Data Center & Server Hall Antistatic Flooring',
    clientCategory: 'Data Center',
    location: 'Cyber Building 2, Kuningan Barat, Jakarta Selatan',
    area: '620 m²',
    duration: '10 Hari Kerja',
    material: 'Static Dissipative Vinyl Homogeneous Tile 2.5mm + Grounding Earthing Pit',
    scope: [
      'Leveling Self-Leveling Underlayment U-Floor 3mm',
      'Jaringan Grounding Grid Tembaga ke Busbar Server',
      'Pemasangan Vinyl ESD Anti-Scratch & Anti-Chemical',
      'Uji Resistansi Megohmmeter Titik ke Titik (Point to Point)',
    ],
    outcome: 'Resistansi terukur 2.8 x 10⁷ Ω (standar ANSI/ESD S20.20 compliant) bebas gangguan EMI.',
    year: '2024',
  },
  {
    id: 'prj-5',
    title: 'Ruang Produksi Makanan Siap Saji HACCP',
    clientCategory: 'Cleanroom Farmasi',
    location: 'Kawasan Industri Modern Cikande, Serang',
    area: '1.600 m²',
    duration: '21 Hari Kerja',
    material: 'Sandwich Panel PIR 50mm Food Grade + Lantai Polyurethane Screed Anti-Slip',
    scope: [
      'Partisi Ruang Pengolahan & Pengemasan Bersih',
      'Plafon Sandwich Panel Walkable Ceiling untuk Maintenance',
      'Coving Sanitasi Silikon Food Grade Anti-Jamur',
      'Air Shower Entrance Partition',
    ],
    outcome: 'Memenuhi standar audit sertifikasi HACCP dan FSSC 22000 tanpa sudut mati kotoran.',
    year: '2023',
  },
  {
    id: 'prj-6',
    title: 'Pabrik Perakitan Modul Baterai EV & Sensor',
    clientCategory: 'Lantai ESD',
    location: 'Kawasan Industri Deltamas, Cikarang Pusat',
    area: '3.100 m²',
    duration: '26 Hari Kerja',
    material: 'ESD Conductive Epoxy Heavy Duty 3.0mm Tahan Beban Forklift',
    scope: [
      'Perbaikan Retak Beton & Joint Expansion Sealant',
      'Grounding Mesh 20 Titik Pentanahan Sub-Panel',
      'Epoxy Conductive Self-Leveling Beban Statis > 60 N/mm²',
      'Inspeksi Megohmmeter & Laporan Sertifikasi Resmi',
    ],
    outcome: 'Daya tahan lintasan automated guided vehicle (AGV) tinggi, resistensi 10⁵ Ω stabil jangka panjang.',
    year: '2024',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    author: 'Ir. Hendra Gunawan',
    role: 'Facility & Engineering Director',
    company: 'PT Bio Farma Sentosa (Cikarang)',
    quote: 'MPN Project menyelesaikan cleanroom kelas ISO 7 seluas 1.250 m² tepat 24 hari sebelum jadwal audit BPOM. Sambungan panel sangat rapi, coving sanitasi sempurna, dan ruangan langsung lolos validasi tanpa rework sama sekali.',
    metric: 'Lolos Audit BPOM 100%',
  },
  {
    id: 'test-2',
    author: 'Bambang Sugianto, S.T.',
    role: 'Production Plant Manager',
    company: 'PT Sinar Microtronics Indonesia (Karawang)',
    quote: 'Masalah static discharge yang sering merusak modul chip PCB kami tuntas total setelah MPN Project mengaplikasikan ESD epoxy conductive lantai. Hasil uji megohmmeter sangat presisi di kisaran 10⁵ Ohm dan mereka memberikan sertifikat uji resmi untuk audit pelanggan Jepang kami.',
    metric: 'Zero ESD Chip Defect',
  },
  {
    id: 'test-3',
    author: 'Rina Wijaya',
    role: 'Supply Chain & Cold Logistics Lead',
    company: 'PT Boga Frozen Express (Jakarta)',
    quote: 'Cold room kapasitas 850 m² suhu -20°C kami tidak mengalami kebocoran suhu atau kondensasi plafon sama sekali berkat presisi sambungan panel PIR camlock dari MPN Project. Efisiensi listrik kompresor sangat terasa hemat.',
    metric: 'Hemat Listrik 28%',
  },
];

export const FAQ_DATA = [
  {
    q: 'Mengapa ruang Cleanroom farmasi dan makanan harus menggunakan Sandwich Panel?',
    a: 'Sandwich panel memiliki permukaan prepainted galvanized steel yang rata, licin, antibakteri, dan bebas pori-pori sehingga debu mikro tidak dapat menempel. Selain itu, dilengkapi sistem coving lengkung di setiap sudut sehingga tidak ada sudut 90 derajat yang menjadi sarang kotoran. Sambungan lidah-alur (tongue and groove) tertutup rapat menjaga tekanan udara positif/negatif dan efisiensi HVAC filter HEPA.',
  },
  {
    q: 'Apa perbedaan mendasar antara Lantai ESD Konduktif dan ESD Disipatif?',
    a: 'Perbedaan utamanya terletak pada nilai hambatan listrik (electrical resistance). Lantai ESD Konduktif memiliki resistansi 10⁴ - 10⁶ Ohm yang membuang muatan statis sangat cepat (< 0.05 detik), ideal untuk industri semikonduktor, microchip sensitif, dan area bahan mudah meledak. Sedangkan Lantai ESD Disipatif memiliki resistansi 10⁶ - 10⁹ Ohm yang mengalirkan muatan secara lebih perlahan dan terkontrol, cocok untuk Data Center, Server Room, dan area perakitan elektronik standar.',
  },
  {
    q: 'Apakah MPN Project menyediakan sertifikat uji resistansi setelah pengerjaan lantai ESD?',
    a: 'Ya, setiap proyek lantai antistatik ESD dari MPN Project selalu melalui pengujian menyeluruh menggunakan alat ukur resistensi permukaan terkalibrasi (Megohmmeter / Surface Resistance Test Kit) sesuai standar ANSI/ESD S20.20 dan IEC 61340-4-1. Kami menerbitkan Berita Acara & Sertifikat Uji Resistansi resmi lengkap dengan titik pemetaan grid grounding untuk keperluan audit ISO/pelanggan Anda.',
  },
  {
    q: 'Berapa lama waktu yang dibutuhkan untuk pemasangan Sandwich Panel dan Lantai ESD?',
    a: 'Keunggulan utama sistem modular MPN Project adalah kecepatan konstruksi hingga 2-3x lebih cepat dibanding bata/drywall konvensional. Sebagai ilustrasi, cleanroom luas 200 m² umumnya selesai dalam 7-10 hari kerja. Sementara pekerjaan lantai ESD seluas 300 m² memerlukan waktu 4-6 hari (termasuk shotblasting, instalasi copper strip grounding, primer, dan top coat drying).',
  },
  {
    q: 'Apakah survei lokasi dan konsultasi teknis benar-benar gratis?',
    a: 'Betul, kami memberikan layanan survei lokasi, pengukuran teknis langsung, konsultasi spesifikasi bahan, dan penyusunan Rencana Anggaran Biaya (RAB) secara GRATIS untuk seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan Karawang.',
  },
];
