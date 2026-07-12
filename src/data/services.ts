import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "neurological-therapy",
    name: "Neurological Therapy",
    shortDescription:
      "Specialized rehabilitation for stroke, Parkinson's, and nerve-related conditions.",
    metaTitle: "Neurological Physiotherapy in Patna | Anand Physiotherapy",
    metaDescription:
      "Expert neurological physiotherapy for stroke recovery, Parkinson's, and spinal cord conditions. Book a consultation at Anand Physiotherapy, Patna.",
    heroImage: "/images/services/neurological-therapy.jpg",
    conditionsTreated: [
      "Stroke recovery",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Spinal cord injury",
      "Peripheral neuropathy",
      "Guillain-Barré syndrome",
    ],
    benefits: [
      "Improved mobility and motor function",
      "Better muscle coordination",
      "Reduced spasticity",
      "Enhanced balance and gait",
      "Greater independence in daily activities",
    ],
    process: [
      { step: "Initial Assessment", description: "Comprehensive evaluation of neurological function, mobility, and strength." },
      { step: "Personalised Plan", description: "A tailored rehabilitation programme designed around your specific condition and goals." },
      { step: "Hands-On Therapy", description: "Evidence-based techniques including NDT, gait re-training, and functional electrical stimulation." },
      { step: "Progress Monitoring", description: "Regular reviews to track improvement and adjust the plan as you recover." },
    ],
    faqs: [
      {
        question: "How long does neurological physiotherapy take to show results?",
        answer:
          "Results vary depending on the condition and severity, but many patients notice improvements in 4–8 weeks of consistent therapy. Stroke recovery, for example, can continue for months to years.",
      },
      {
        question: "Can physiotherapy help after a stroke?",
        answer:
          "Yes. Physiotherapy is a cornerstone of stroke rehabilitation. Early intervention helps retrain the brain through neuroplasticity, improving movement, balance, and speech over time.",
      },
    ],
  },
  {
    slug: "aquatic-therapy",
    name: "Aquatic Therapy",
    shortDescription:
      "Water-based rehabilitation that reduces joint stress while building strength and mobility.",
    metaTitle: "Aquatic Therapy in Patna | Hydrotherapy | Anand Physiotherapy",
    metaDescription:
      "Discover the benefits of aquatic/hydrotherapy at Anand Physiotherapy, Patna. Ideal for arthritis, post-surgery recovery, and chronic pain conditions.",
    heroImage: "/images/services/aquatic-therapy.jpg",
    conditionsTreated: [
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Post-surgical rehabilitation",
      "Chronic back pain",
      "Fibromyalgia",
      "Obesity-related joint issues",
    ],
    benefits: [
      "Reduced joint stress due to buoyancy",
      "Improved range of motion",
      "Pain relief through warm water",
      "Increased muscle strength safely",
      "Enhanced cardiovascular fitness",
    ],
    process: [
      { step: "Water Safety Assessment", description: "Evaluate comfort level and any contraindications before pool sessions." },
      { step: "Custom Aquatic Programme", description: "Exercises tailored to your condition using water resistance and buoyancy." },
      { step: "Supervised Sessions", description: "All sessions supervised by a trained physiotherapist for safety and effectiveness." },
      { step: "Transition to Land Exercise", description: "Gradual progression to land-based exercises as strength and confidence improve." },
    ],
    faqs: [
      {
        question: "Do I need to know how to swim for aquatic therapy?",
        answer:
          "No. Aquatic therapy is performed in shallow water, and a physiotherapist is always present. Swimming ability is not required.",
      },
      {
        question: "Is aquatic therapy good for arthritis?",
        answer:
          "Yes. The warm water reduces joint pain and stiffness, while buoyancy allows movement with far less stress on the joints than land-based exercise.",
      },
    ],
  },
  {
    slug: "paediatric-therapy",
    name: "Paediatric Therapy",
    shortDescription:
      "Gentle, play-based physiotherapy for children with developmental, neurological, or orthopaedic conditions.",
    metaTitle: "Paediatric Physiotherapy for Children in Patna | Anand Physiotherapy",
    metaDescription:
      "Expert child physiotherapy at Anand Physiotherapy, Patna. Helping children with delayed milestones, cerebral palsy, and orthopaedic conditions reach their full potential.",
    heroImage: "/images/services/paediatric-therapy.jpg",
    conditionsTreated: [
      "Developmental delay",
      "Cerebral palsy",
      "Down syndrome",
      "Autism spectrum disorder",
      "Torticollis (twisted neck)",
      "Scoliosis in children",
    ],
    benefits: [
      "Improved motor development",
      "Better posture and coordination",
      "Enhanced strength and balance",
      "Increased independence in daily activities",
      "Boost in confidence and social participation",
    ],
    process: [
      { step: "Child & Parent Assessment", description: "Detailed evaluation of the child's development, with parents/carers fully involved." },
      { step: "Play-Based Therapy Plan", description: "Fun, engaging activities designed to achieve therapeutic goals through play." },
      { step: "Regular Therapy Sessions", description: "Consistent sessions with progress tracked against developmental milestones." },
      { step: "Home Programme", description: "Simple exercises for parents to practice at home to reinforce gains between sessions." },
    ],
    faqs: [
      {
        question: "At what age should a child start physiotherapy?",
        answer:
          "As early as possible. Early intervention yields the best outcomes for developmental conditions. Even infants can benefit from paediatric physiotherapy.",
      },
      {
        question: "How do I know if my child needs physiotherapy?",
        answer:
          "Signs include missing motor milestones (not sitting, walking at expected ages), unusual posture, limping, or difficulty with coordination. A paediatrician referral is a good starting point.",
      },
    ],
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    shortDescription:
      "Helping patients regain the skills needed for everyday life — from dressing and cooking to returning to work.",
    metaTitle: "Occupational Therapy in Patna | Anand Physiotherapy",
    metaDescription:
      "Occupational therapy at Anand Physiotherapy, Patna. Regain independence in daily life after illness, injury, or disability with our expert OT programme.",
    heroImage: "/images/services/occupational-therapy.jpg",
    conditionsTreated: [
      "Stroke and brain injury",
      "Hand and upper limb injuries",
      "Arthritis",
      "Mental health conditions",
      "Developmental disabilities",
      "Work-related injuries",
    ],
    benefits: [
      "Regained independence in daily tasks",
      "Improved fine motor skills",
      "Better home and work adaptation",
      "Reduced risk of falls and accidents",
      "Enhanced mental well-being",
    ],
    process: [
      { step: "Functional Assessment", description: "Evaluate how your condition affects daily activities at home, work, and in the community." },
      { step: "Goal Setting", description: "Set meaningful, patient-centred goals for returning to the activities that matter most to you." },
      { step: "Therapeutic Intervention", description: "Practise daily tasks with adaptive techniques and assistive equipment as needed." },
      { step: "Environment Modification", description: "Recommend home or workplace changes to support independence and safety." },
    ],
    faqs: [
      {
        question: "What is the difference between physiotherapy and occupational therapy?",
        answer:
          "Physiotherapy focuses on movement and physical function. Occupational therapy focuses on helping you perform the activities (occupations) of daily life — self-care, work, leisure — despite limitations.",
      },
      {
        question: "Can occupational therapy help after a stroke?",
        answer:
          "Absolutely. OT is a core part of stroke rehabilitation, helping patients relearn how to dress, cook, write, and manage daily routines independently.",
      },
    ],
  },
  {
    slug: "balance-exercise-therapy",
    name: "Balance & Exercise Therapy",
    shortDescription:
      "Targeted exercises to improve balance, prevent falls, and build strength — especially for elderly patients.",
    metaTitle: "Balance Therapy & Fall Prevention in Patna | Anand Physiotherapy",
    metaDescription:
      "Balance and exercise therapy at Anand Physiotherapy, Patna. Reduce fall risk, improve stability, and build confidence — ideal for seniors and neurological conditions.",
    heroImage: "/images/services/balance-exercise-therapy.jpg",
    conditionsTreated: [
      "Age-related balance decline",
      "Vestibular disorders (dizziness/vertigo)",
      "Post-stroke balance impairment",
      "Parkinson's disease",
      "Peripheral neuropathy",
      "Post-fracture rehabilitation",
    ],
    benefits: [
      "Significantly reduced fall risk",
      "Improved confidence in movement",
      "Better coordination and reaction time",
      "Stronger core and lower limb muscles",
      "Greater independence in daily activities",
    ],
    process: [
      { step: "Balance Assessment", description: "Standardised tests (Berg Balance Scale, TUG) to measure fall risk and baseline." },
      { step: "Targeted Exercise Plan", description: "Progressive balance and strengthening exercises designed for your level." },
      { step: "Vestibular Rehabilitation", description: "Specific manoeuvres (e.g. Epley) if dizziness or BPPV is contributing." },
      { step: "Functional Training", description: "Practice real-life scenarios — climbing stairs, uneven surfaces, turning quickly." },
    ],
    faqs: [
      {
        question: "Can physiotherapy prevent falls in the elderly?",
        answer:
          "Yes. Research consistently shows that tailored balance and strength training can reduce fall risk in older adults by 30–40%.",
      },
      {
        question: "What causes poor balance?",
        answer:
          "Balance problems can stem from inner ear disorders, neurological conditions (stroke, Parkinson's), muscle weakness, medication side effects, or simply age-related decline.",
      },
    ],
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    shortDescription:
      "Comprehensive musculoskeletal physiotherapy for injuries, post-surgical recovery, and chronic pain.",
    metaTitle: "Physical Therapy & Physiotherapy in Patna | Anand Physiotherapy",
    metaDescription:
      "Expert physical therapy at Anand Physiotherapy, Patna. Treating back pain, sports injuries, post-surgical recovery, and musculoskeletal conditions with evidence-based care.",
    heroImage: "/images/services/physical-therapy.jpg",
    conditionsTreated: [
      "Lower back pain",
      "Neck pain and cervical spondylosis",
      "Shoulder (rotator cuff, frozen shoulder)",
      "Knee pain and osteoarthritis",
      "Sports injuries",
      "Post-surgical rehabilitation",
    ],
    benefits: [
      "Reduced pain and inflammation",
      "Restored mobility and flexibility",
      "Improved strength and posture",
      "Faster return to sport or work",
      "Prevention of re-injury",
    ],
    process: [
      { step: "Detailed Evaluation", description: "Thorough assessment of posture, range of motion, strength, and pain patterns." },
      { step: "Manual Therapy", description: "Hands-on techniques — joint mobilisation, soft tissue massage, and manipulation." },
      { step: "Therapeutic Exercise", description: "Targeted exercises to rebuild strength, flexibility, and movement patterns." },
      { step: "Education & Prevention", description: "Guidance on posture, ergonomics, and exercises to prevent recurrence." },
    ],
    faqs: [
      {
        question: "How many physiotherapy sessions will I need?",
        answer:
          "It depends on the condition. Acute injuries may improve in 4–6 sessions; chronic conditions or post-surgical rehab often require 8–16 sessions over several weeks.",
      },
      {
        question: "Can physiotherapy replace surgery?",
        answer:
          "In many cases, yes. Physiotherapy is a proven first-line treatment for conditions like knee osteoarthritis, rotator cuff tears, and lumbar disc herniation — often avoiding the need for surgery.",
      },
    ],
  },
  {
    slug: "heat-therapy",
    name: "Heat Therapy",
    shortDescription:
      "Therapeutic heat application to relax muscles, improve circulation, and relieve chronic pain.",
    metaTitle: "Heat Therapy for Muscle Pain in Patna | Anand Physiotherapy",
    metaDescription:
      "Heat therapy (hot pack therapy) at Anand Physiotherapy, Patna. Effective for muscle stiffness, chronic pain, and joint conditions. Combined with hands-on physiotherapy.",
    heroImage: "/images/services/heat-therapy.jpg",
    conditionsTreated: [
      "Muscle stiffness and spasms",
      "Chronic neck and back pain",
      "Arthritis joint pain",
      "Fibromyalgia",
      "Sports muscle soreness",
      "Pre-exercise warm-up for stiff joints",
    ],
    benefits: [
      "Relaxes tight and spasmed muscles",
      "Improves blood circulation to the area",
      "Reduces chronic pain and stiffness",
      "Prepares tissues for manual therapy",
      "Non-invasive and well-tolerated",
    ],
    process: [
      { step: "Assessment of Suitability", description: "Ensure heat is appropriate — not used on acute injuries, open wounds, or areas with poor sensation." },
      { step: "Application of Heat", description: "Hot packs, infrared lamps, or paraffin wax applied for 15–20 minutes to the target area." },
      { step: "Combined Therapy", description: "Heat is typically followed by manual therapy or exercises for a synergistic effect." },
      { step: "Home Advice", description: "Guidance on safe heat use at home — hot water bottles, heat pads — between clinic sessions." },
    ],
    faqs: [
      {
        question: "Is heat or ice better for pain?",
        answer:
          "Ice is best for acute injuries (first 48–72 hours) to reduce swelling. Heat is better for chronic pain, muscle stiffness, and conditions like arthritis where improved circulation is beneficial.",
      },
      {
        question: "How long should you apply heat therapy?",
        answer:
          "Typically 15–20 minutes at a time. Longer applications can cause skin irritation or burns. Always use a cloth barrier between the heat source and skin.",
      },
    ],
  },
  {
    slug: "exercise-therapy",
    name: "Exercise Therapy",
    shortDescription:
      "Prescribed therapeutic exercise programmes to restore function, build endurance, and manage chronic conditions.",
    metaTitle: "Exercise Therapy for Joint Pain in Patna | Anand Physiotherapy",
    metaDescription:
      "Therapeutic exercise programmes at Anand Physiotherapy, Patna. Tailored exercises for joint pain, chronic disease management, strength building, and rehabilitation.",
    heroImage: "/images/services/exercise-therapy.jpg",
    conditionsTreated: [
      "Chronic back and joint pain",
      "Osteoporosis",
      "Cardiac rehabilitation",
      "Diabetes management",
      "Post-fracture strength building",
      "General deconditioning and weakness",
    ],
    benefits: [
      "Improved strength, flexibility, and endurance",
      "Better management of chronic conditions",
      "Reduced pain through movement",
      "Weight management support",
      "Improved mental health and energy levels",
    ],
    process: [
      { step: "Fitness & Functional Assessment", description: "Evaluate current fitness level, movement quality, and condition-specific needs." },
      { step: "Personalised Exercise Prescription", description: "A progressive programme with sets, reps, and progressions — not generic exercises." },
      { step: "Supervised Practice", description: "Learn correct technique in the clinic to prevent injury and maximise results." },
      { step: "Home Exercise Programme", description: "A clear, illustrated plan for exercises to continue between clinic visits." },
    ],
    faqs: [
      {
        question: "Can I exercise if I am in pain?",
        answer:
          "Yes — with guidance. Movement is medicine. A physiotherapist will prescribe exercises that are within your pain tolerance and gradually reduce pain over time rather than aggravate it.",
      },
      {
        question: "How is exercise therapy different from going to the gym?",
        answer:
          "Exercise therapy is medically prescribed and targeted at your specific condition. A physiotherapist monitors technique, adjusts intensity, and ensures each exercise serves a therapeutic purpose.",
      },
    ],
  },
  {
    slug: "pain-management",
    name: "Pain Management",
    shortDescription:
      "Evidence-based strategies to reduce acute and chronic pain without relying solely on medication.",
    metaTitle: "Chronic Pain Management Physiotherapy in Patna | Anand Physiotherapy",
    metaDescription:
      "Physiotherapy-led pain management at Anand Physiotherapy, Patna. Reduce chronic pain from back conditions, arthritis, nerve pain, and fibromyalgia with evidence-based treatment.",
    heroImage: "/images/services/pain-management.jpg",
    conditionsTreated: [
      "Chronic low back pain",
      "Sciatica and nerve pain",
      "Fibromyalgia",
      "Complex Regional Pain Syndrome (CRPS)",
      "Post-surgical pain",
      "Headaches and migraines (cervicogenic)",
    ],
    benefits: [
      "Reduced pain severity and frequency",
      "Less dependence on pain medication",
      "Better sleep and daily function",
      "Improved psychological well-being",
      "Practical self-management tools",
    ],
    process: [
      { step: "Pain Assessment", description: "Detailed evaluation of pain type, triggers, duration, and impact on daily life." },
      { step: "Multi-Modal Treatment", description: "Combining manual therapy, electrotherapy, exercise, and education for best results." },
      { step: "Pain Education", description: "Understanding pain science — why pain occurs and why it persists — to reduce fear and avoidance." },
      { step: "Self-Management Plan", description: "Tools and strategies to manage flare-ups and maintain progress long-term." },
    ],
    faqs: [
      {
        question: "Can physiotherapy cure chronic pain?",
        answer:
          "Physiotherapy cannot always eliminate chronic pain entirely, but it can significantly reduce its severity and impact on daily life, helping patients live fuller, more active lives.",
      },
      {
        question: "Is physiotherapy better than painkillers for chronic pain?",
        answer:
          "For long-term chronic pain, physiotherapy addresses the underlying causes and builds resilience. Painkillers manage symptoms short-term but do not treat the root cause. A combination is often recommended initially.",
      },
    ],
  },
  {
    slug: "electrotherapy",
    name: "Electrotherapy",
    shortDescription:
      "Advanced electrical stimulation techniques (TENS, IFT, ultrasound) to reduce pain and accelerate healing.",
    metaTitle: "Electrotherapy Physiotherapy in Patna | TENS, IFT, Ultrasound",
    metaDescription:
      "Electrotherapy at Anand Physiotherapy, Patna. Using TENS, interferential therapy, and ultrasound to relieve pain, reduce inflammation, and speed up tissue healing.",
    heroImage: "/images/services/electrotherapy.jpg",
    conditionsTreated: [
      "Acute and chronic pain",
      "Muscle spasm and tension",
      "Nerve pain (neuropathy, sciatica)",
      "Sports injuries and soft tissue damage",
      "Delayed wound/tissue healing",
      "Post-surgical oedema",
    ],
    benefits: [
      "Immediate pain relief for many conditions",
      "Reduced muscle spasm and stiffness",
      "Accelerated tissue healing",
      "Decreased inflammation and swelling",
      "Non-invasive, no medication required",
    ],
    process: [
      { step: "Identify Target Area", description: "Assess which modality — TENS, IFT, ultrasound, or laser — is most appropriate." },
      { step: "Set Up Equipment", description: "Electrodes or probes positioned precisely over the affected area." },
      { step: "Treatment Session", description: "15–20 minute session, adjusted to comfortable intensity — should not be painful." },
      { step: "Combined Therapy", description: "Electrotherapy is most effective when combined with exercise and manual therapy." },
    ],
    faqs: [
      {
        question: "Is electrotherapy safe?",
        answer:
          "Yes, when applied by a trained physiotherapist. It is contraindicated in certain cases (pacemakers, pregnancy, open wounds) — your therapist will screen you before treatment.",
      },
      {
        question: "What is the difference between TENS and IFT?",
        answer:
          "TENS (Transcutaneous Electrical Nerve Stimulation) uses low-frequency current primarily for pain relief. IFT (Interferential Therapy) uses medium-frequency currents that penetrate deeper, effective for both pain relief and muscle stimulation.",
      },
    ],
  },
];
