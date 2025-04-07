enum EventLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

enum EventType {
  Workshop = 'Workshop',
  Hackathon = 'Hackathon',
  CodeChallenge = 'Code Challenge',
  OHW = 'Open Hack Week',
  General = 'General',
  Special = 'Special',
}

export interface Event {
  id: string;
  type: string | `${EventType}`;
  banner: string;
  title: string;
  description: string;
  level: string | `${EventLevel}`;
  date: string;
  time: string;
  venue: string;
  speaker?: string;
  RSVPLink: string;
  dateTime: string;
}
