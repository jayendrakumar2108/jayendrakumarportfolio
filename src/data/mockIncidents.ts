import { Incident } from '../types/incident';

const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, showing high-paying positions predominantly to male profiles regardless of qualifications. Investigation revealed training data imbalance.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information when asked about emergency protocols for chemical spills. Model confidently presented fabricated procedures that would have increased risk to personnel.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata when responding to specific prompt patterns. No personal identifying information was revealed, but session data was visible.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Facial Recognition False Positives",
    description: "Security system's facial recognition algorithm produced a 15% false positive rate when identifying restricted personnel, particularly with individuals of certain ethnicities. System has been temporarily disabled.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Translation Service Misinterpreted Medical Terms",
    description: "AI translation service incorrectly translated critical medical terminology in patient instructions, potentially leading to improper medication usage. Issue was detected during quality review before distribution.",
    severity: "Medium",
    reported_at: "2025-03-22T11:20:00Z"
  }
];

export default mockIncidents;