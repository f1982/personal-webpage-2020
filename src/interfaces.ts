export interface TimelineObject {
  id: number;
  type: string;
  start: string;
  end: string;
  position: string;
  company: string;
  desc: string[];
  description: string;
}

/**
 * Project Value Object
 */
export interface ProjectObject {
  id: number;
  type: string;
  state: string;
  cover: string;
  start: string;
  end: string;
  images: string;
  tech: string;
  link: string;
  video: string;
  language: string;
  title: string;
  description: string;
  quote: string;
}