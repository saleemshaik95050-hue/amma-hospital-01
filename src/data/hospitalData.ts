export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  keyServices: string[];
  icon: string;
  badge: string;
  highlightColor: string;
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  icon: string;
}

export const HOSPITAL_INFO = {
  name: 'AMMA HOSPITAL',
  tagline: 'GENERAL & CRITICAL CARE | MATERNITY | ORTHO & TRAUMA CARE CENTRE',
  address: {
    line1: 'Beside Shishuraksha Hospital, Near Dharmashala',
    road: 'Siricilla Road',
    city: 'Kamareddy',
    district: 'Kamareddy (Dist)',
    state: 'Telangana',
    pincode: '503111',
    full: 'Beside Shishuraksha Hospital, Near Dharmashala, Siricilla Road, Kamareddy (Dist), Telangana'
  },
  contacts: {
    emergency: '9542654666',
    landline: '08468352373',
    whatsapp: '9542654666',
  },
  googleMapsQuery: 'AMMA Hospital, Beside Shishuraksha Hospital, Near Dharmashala, Siricilla Road, Kamareddy, Telangana',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Beside+Shishuraksha+Hospital+Near+Dharmashala+Siricilla+Road+Kamareddy+Telangana',
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'general-medicine',
    name: 'General Medicine',
    shortDescription: 'Comprehensive diagnostic evaluation, primary healthcare, and management of acute and chronic health conditions for all age groups.',
    fullDescription: 'Our General Medicine division provides thorough clinical assessments, evidence-based medical treatment, and long-term management for seasonal infections, fever illnesses, metabolic health, hypertension, and overall internal health.',
    keyServices: [
      'Comprehensive Clinical Consultations',
      'Diagnostic Assessment & Health Screenings',
      'Fever, Infection & Acute Illness Care',
      'Management of Chronic Lifestyle Conditions',
      'Preventive Health Advice & Follow-ups'
    ],
    icon: 'Stethoscope',
    badge: 'Primary Care',
    highlightColor: 'teal'
  },
  {
    id: 'critical-care',
    name: 'Critical Care',
    shortDescription: 'Dedicated intensive care facility providing 24/7 continuous vital monitoring and advanced medical life support for high-dependency patients.',
    fullDescription: 'AMMA Hospital’s Critical Care unit is equipped for acute stabilization and intensive patient monitoring, supported by experienced clinical staff and continuous vital-tracking systems to handle critical clinical situations.',
    keyServices: [
      'Continuous 24/7 Multi-Parameter Vital Monitoring',
      'Intensive Medical Care & High-Dependency Beds',
      'Acute Clinical Stabilization & Oxygen Support',
      'Dedicated Critical Nursing Oversight',
      'Prompt Emergency Response Protocol'
    ],
    icon: 'Activity',
    badge: 'Intensive Monitoring',
    highlightColor: 'blue'
  },
  {
    id: 'maternity-care',
    name: 'Maternity Care',
    shortDescription: 'Compassionate, safe, and family-centered pregnancy, labor, delivery, and postpartum care for mother and baby.',
    fullDescription: 'Our Maternity Care center is designed to offer a comforting, secure, and supportive environment throughout every stage of motherhood—from prenatal checkups and safe delivery support to newborn care and mother recovery.',
    keyServices: [
      'Comprehensive Prenatal Checkups & Health Advice',
      'Comfortable Labor & Delivery Facilities',
      'Normal & Caesarean Delivery Medical Support',
      'Postnatal Mother Care & Recovery Guidance',
      'Newborn Care & Vital Health Monitoring'
    ],
    icon: 'Heart',
    badge: 'Mother & Baby',
    highlightColor: 'rose'
  },
  {
    id: 'orthopaedic-care',
    name: 'Orthopaedic Care',
    shortDescription: 'Specialized clinical care for bone fractures, joint problems, sports injuries, and musculoskeletal conditions.',
    fullDescription: 'We provide focused orthopaedic assessment and management for joint stiffness, arthritis, bone injuries, spine discomfort, and chronic musculoskeletal pain, helping patients regain comfort and mobility.',
    keyServices: [
      'Bone Fracture Diagnosis & Immobilization Care',
      'Joint Pain & Arthritis Management',
      'Musculoskeletal Injury Assessment',
      'Post-Fracture Rehabilitation & Follow-up',
      'Spine, Knee, and Shoulder Care'
    ],
    icon: 'Shield',
    badge: 'Bone & Joint',
    highlightColor: 'emerald'
  },
  {
    id: 'trauma-care',
    name: 'Trauma Care',
    shortDescription: 'Rapid emergency response and structured care for accidental injuries, road trauma, severe cuts, and acute physical impact.',
    fullDescription: 'Our Trauma Care Centre focuses on immediate triage, wound stabilization, fracture management, and prompt clinical intervention when accidental physical injuries occur.',
    keyServices: [
      'Rapid Trauma Triage & Vital Stabilization',
      'Emergency Wound Cleansing & Suturing',
      'Accident & Road Injury Management',
      'Fracture Splinting & Clinical Stabilization',
      'Coordinated Care with Critical Care Unit'
    ],
    icon: 'Zap',
    badge: 'Immediate Response',
    highlightColor: 'amber'
  },
  {
    id: 'emergency-care',
    name: 'Emergency Care',
    shortDescription: '24/7 emergency medical triage and immediate clinical attention for sudden illnesses, acute distress, and critical situations.',
    fullDescription: 'Our Emergency Care department is equipped to respond quickly when unexpected medical conditions arise, providing immediate examination, diagnostic support, and stabilization.',
    keyServices: [
      'Round-the-Clock Emergency Reception',
      'Immediate Medical Triage & Resuscitation',
      'Emergency Oxygen & Medication Administration',
      'Bedside Diagnostic Coordination',
      'Seamless Admission to Critical Care / Ward'
    ],
    icon: 'Cross',
    badge: '24/7 Support',
    highlightColor: 'red'
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    title: 'Experienced Medical Care',
    description: 'Our medical staff brings dedicated clinical expertise to diagnose, treat, and monitor each patient with precision and care.',
    icon: 'UserCheck'
  },
  {
    title: 'Patient-Centered Treatment',
    description: 'Every treatment pathway is tailored around the comfort, dignity, and individual health needs of the patient and family.',
    icon: 'Users'
  },
  {
    title: 'Modern Healthcare Facilities',
    description: 'Well-equipped clinical rooms, patient suites, diagnostic readiness, and monitoring systems designed for safety.',
    icon: 'Building2'
  },
  {
    title: 'Emergency & Critical Care',
    description: 'Round-the-clock emergency medical readiness and high-dependency ICU infrastructure for timely interventions.',
    icon: 'AlertCircle'
  },
  {
    title: "Maternity & Women's Care",
    description: 'Warm, respectful care for expecting mothers, secure birthing suites, and nurturing postpartum support for baby and mother.',
    icon: 'Sparkles'
  },
  {
    title: 'Orthopaedic & Trauma Care',
    description: 'Immediate fracture stabilization, bone and joint treatment, and trauma response right here on Siricilla Road.',
    icon: 'Crosshair'
  },
  {
    title: 'Clean & Comfortable Environment',
    description: 'Strict hygiene protocols, sanitized wards, and pleasant patient-care spaces to support quiet, restful recovery.',
    icon: 'Sparkle'
  },
  {
    title: 'Compassionate Patient Support',
    description: 'Clear communication, respectful staff, and seamless guidance from arrival through consultation and recovery.',
    icon: 'HeartHandshake'
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'Where is AMMA Hospital located in Kamareddy?',
    a: 'AMMA Hospital is conveniently situated beside Shishuraksha Hospital, near Dharmashala on Siricilla Road in Kamareddy, Telangana. It is easily accessible for patients from across Kamareddy district.'
  },
  {
    q: 'How can I contact AMMA Hospital in case of an emergency?',
    a: 'You can reach our emergency desk directly by calling 9542654666 or landline 08468352373. Our clinical team is prepared to receive emergency and trauma cases.'
  },
  {
    q: 'What specialties are available at AMMA Hospital?',
    a: 'We provide specialized healthcare across General Medicine, Critical Care (ICU), Maternity Care, Orthopaedic Care, Trauma Care, and 24/7 Emergency Care.'
  },
  {
    q: 'Can I book an appointment in advance?',
    a: 'Yes. You can use our online appointment booking form on this website or call our reception at 9542654666 / 08468352373 to schedule your consultation.'
  }
];

export interface GalleryItem {
  id: string;
  filename: string;
  title: string;
  category: 'all' | 'exterior' | 'emergency' | 'icu' | 'maternity' | 'ortho' | 'inpatient' | 'diagnostics' | 'reception';
  categoryLabel: string;
  department: string;
  caption: string;
  features: string[];
  equipment: string[];
  accentColor: string;
  iconName: string;
}

export const HOSPITAL_GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'dsc00344',
    filename: 'DSC00344.JPG',
    title: 'Hospital Facade & Campus Entrance',
    category: 'exterior',
    categoryLabel: 'Exterior & Campus',
    department: 'Main Hospital Building',
    caption: 'The main AMMA Hospital campus on Siricilla Road, Kamareddy, featuring multi-storey clinical infrastructure, dedicated ambulance driveway, and prominent hospital signage.',
    features: ['Multi-Storey Medical Facility', 'Direct Siricilla Road Access', 'Ambulance Arrival Bay', 'Accessible Wheelchair Ramps'],
    equipment: ['24/7 Emergency Canopy', 'Help Desk & Reception', 'Full Elevator Access', 'Generator Power Backup'],
    accentColor: '#0054a6',
    iconName: 'Building2'
  },
  {
    id: 'dsc00346',
    filename: 'DSC00346.JPG',
    title: '24/7 Emergency Casualty & Ambulance Reception',
    category: 'emergency',
    categoryLabel: 'Emergency & Trauma',
    department: 'Emergency & Casualty',
    caption: 'Rapid-triage casualty station equipped for immediate patient intake, acute trauma stabilization, and direct access to emergency resuscitation beds.',
    features: ['24/7 Rapid Triage', 'Direct Stretcher Bay', 'Immediate Physician Response', 'Oxygen-Equipped Bays'],
    equipment: ['Crash Cart & Defibrillator', 'Multi-parameter Monitor', 'Portable Oxygen Delivery', 'Immobilization Boards'],
    accentColor: '#e11d48',
    iconName: 'Ambulance'
  },
  {
    id: 'dsc00348',
    filename: 'DSC00348.JPG',
    title: 'Main Hospital Reception & Patient Care Lounge',
    category: 'reception',
    categoryLabel: 'Lobby & Reception',
    department: 'Administration & Reception',
    caption: 'Spacious, clean, and welcoming front desk and patient waiting lounge designed for smooth registration, OPD token management, and family assistance.',
    features: ['Seamless OPD Registration', 'Comfortable Waiting Lounge', 'Clear Directional Signage', 'Help Desk Guidance'],
    equipment: ['Digital Token Display', 'Patient Record Station', 'Wheelchair Assistance', 'Help Desk Telephone'],
    accentColor: '#0054a6',
    iconName: 'Users'
  },
  {
    id: 'dsc00350',
    filename: 'DSC00350.JPG',
    title: 'Doctor Consultation Suite & Clinical Chambers',
    category: 'reception',
    categoryLabel: 'Consultation & OPD',
    department: 'General Medicine & OPD',
    caption: 'Private, sanitized clinical consultation rooms where senior physicians conduct patient evaluations, vital assessments, and treatment planning.',
    features: ['Private Doctor Consultations', 'Examination Bed & Screen', 'Thorough Diagnostic Review', 'Preventive Health Advice'],
    equipment: ['Electronic BP & Stethoscope', 'Diagnostic Light Source', 'Clinical Examination Couch', 'Patient File Station'],
    accentColor: '#16943c',
    iconName: 'Stethoscope'
  },
  {
    id: 'dsc00354',
    filename: 'DSC00354.JPG',
    title: 'Intensive Critical Care Unit (ICU) Beds & Telemetry',
    category: 'icu',
    categoryLabel: 'Critical Care ICU',
    department: 'Critical Care',
    caption: 'State-of-the-art ICU bed with real-time multi-parameter telemetry monitoring heart rhythm (ECG), SpO2, blood pressure, and respiratory status 24/7.',
    features: ['24/7 Real-Time Telemetry', 'Multi-Parameter Vital Screen', 'Motorized Critical Care Bed', 'Dedicated 1:1 Nursing Station'],
    equipment: ['ECG & SpO2 Cardiac Monitor', 'Central Medical Gas Pipeline', 'Syringe & Infusion Pumps', 'Invasive Blood Pressure Setup'],
    accentColor: '#0054a6',
    iconName: 'Activity'
  },
  {
    id: 'dsc00355',
    filename: 'DSC00355.JPG',
    title: 'High Dependency Unit (HDU) Vital Station',
    category: 'icu',
    categoryLabel: 'Critical Care ICU',
    department: 'Critical Care & HDU',
    caption: 'Continuous step-down monitoring bay providing close medical observation for recovering post-surgical and acute medical patients.',
    features: ['Step-Down Critical Oversight', 'Continuous Oxygen Support', 'Rapid Nurse Calling Alarm', 'Bedside Infusion Systems'],
    equipment: ['Bedside Vital Sign Monitor', 'Oxygen Flowmeter & Humidifier', 'Electric Suction Unit', 'Emergency Medication Tray'],
    accentColor: '#0054a6',
    iconName: 'HeartPulse'
  },
  {
    id: 'dsc00358',
    filename: 'DSC00358.JPG',
    title: 'Advanced Operation Theatre & Sterile Surgical Suite',
    category: 'ortho',
    categoryLabel: 'Operation Theatre',
    department: 'Surgical Services',
    caption: 'Sterile surgical suite equipped with overhead surgical shadowless lighting, specialized anaesthesia workstation, and orthopaedic trauma instruments.',
    features: ['HEPA Filtered Airflow', 'Sterile Surgical Zone', 'Shadowless LED Surgical Lights', 'Comprehensive Anaesthesia Station'],
    equipment: ['Dual-Dome Surgical Lights', 'Anaesthesia Delivery Station', 'Cautery & Suction Units', 'Orthopaedic Fracture Table'],
    accentColor: '#0054a6',
    iconName: 'ShieldCheck'
  },
  {
    id: 'dsc00359',
    filename: 'DSC00359.JPG',
    title: 'Orthopaedic Trauma & Minor Procedure Room',
    category: 'ortho',
    categoryLabel: 'Ortho & Trauma',
    department: 'Orthopaedic & Trauma Care',
    caption: 'Dedicated orthopaedic treatment area for fracture reduction, plaster casting, dislocation management, and minor surgical wound closures.',
    features: ['Immediate Fracture Care', 'POP & Synthetic Casting', 'Wound Debridement & Suturing', 'Joint Pain Interventions'],
    equipment: ['Backlit Digital X-Ray Viewer', 'Skeletal Traction Tools', 'Plaster Cutter & Spreaders', 'Surgical Dressing Trolley'],
    accentColor: '#16943c',
    iconName: 'Shield'
  },
  {
    id: 'dsc00371',
    filename: 'DSC00371.JPG',
    title: 'Maternity Delivery Ward & Labor Care Facility',
    category: 'maternity',
    categoryLabel: 'Maternity Care',
    department: 'Maternity & Obstetrics',
    caption: 'Gentle, respectful, and family-centered birthing suite with ergonomic obstetric delivery bed, fetal heart monitoring, and warm patient recovery support.',
    features: ['Safe Normal & C-Section Care', 'Fetal Heart Rate Monitoring', 'Compassionate Midwifery Support', 'Spacious Mother Recovery Space'],
    equipment: ['Specialized Labor & Delivery Bed', 'Fetal Doppler Monitor', 'Resuscitation Supply Trolley', 'Mother Vital Signs Monitor'],
    accentColor: '#e11d48',
    iconName: 'Heart'
  },
  {
    id: 'dsc00372',
    filename: 'DSC00372.JPG',
    title: 'Neonatal Care & Radiant Infant Warmer Nursery',
    category: 'maternity',
    categoryLabel: 'Neonatal & Child',
    department: 'Maternity & Neonatal',
    caption: 'Temperature-regulated neonatal resuscitation and baby warmer station ensuring instant newborn stabilization, thermal comfort, and pediatric monitoring.',
    features: ['Instant Newborn Stabilization', 'Microprocessor Temperature Control', 'Gentle LED Examination Light', 'Safe Acrylic Bassinet Cot'],
    equipment: ['Radiant Newborn Warmer', 'Infant Oxygen & Suction Setup', 'Neonatal Phototherapy Unit', 'Digital Pediatric Scale'],
    accentColor: '#16943c',
    iconName: 'Baby'
  },
  {
    id: 'dsc00380',
    filename: 'DSC00380.JPG',
    title: '24/7 Clinical Pathology & Diagnostic Laboratory',
    category: 'diagnostics',
    categoryLabel: 'Diagnostic Lab',
    department: 'Diagnostic Services',
    caption: 'In-house clinical laboratory facilitating rapid turnaround for routine blood chemistry, hematology, fever profiles, and emergency critical blood panels.',
    features: ['Rapid Blood Test Results', 'Hematology & Biochemistry Panels', 'Fever & Infection Screening', 'Emergency STAT Reporting'],
    equipment: ['Automated Hematology Analyzer', 'Biochemistry Spectrophotometer', 'Centrifuge Machine', 'Clinical Digital Microscope'],
    accentColor: '#0054a6',
    iconName: 'Microscope'
  },
  {
    id: 'dsc00384',
    filename: 'DSC00384.JPG',
    title: 'Deluxe Inpatient Room & Patient Recovery Ward',
    category: 'inpatient',
    categoryLabel: 'Inpatient Rooms',
    department: 'Inpatient Care',
    caption: 'Spotless, peaceful patient room equipped with an adjustable hospital bed, attendant couch, attached sanitized washroom, and call bell communication.',
    features: ['Sanitized Restful Environment', 'Multi-Position Patient Bed', 'Dedicated Attendant Seating', 'Direct Nurse Calling System'],
    equipment: ['Wall Oxygen & Suction Outlet', 'Patient Side Table & Overbed Table', 'Attached Clean Bathroom', 'Emergency Call Bell'],
    accentColor: '#16943c',
    iconName: 'Bed'
  }
];

