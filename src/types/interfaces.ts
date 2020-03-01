export interface MenuItemObject {
    name: string;
    link?: string;
    index: number;
}

export interface TimelineObject {
    id: number;
    type: string;
    start: string;
    end: string;
    position: string[];
    company: string;
    desc: string[];
    description: string;
    hidden: boolean;
}

export interface TimelineLifeObject {
    id: number;
    start: string;
    end: string;
    title: string;
    subtitle: string;
    description: string;
    hidden: boolean;
}

/**
 * Project Value Object
 */
export interface ProjectObject {
    id: number;
    title: string;
    responsibility: string;
    description: string;
    type: string;
    icon: string;
    qrcode: string;
    platform: string;
    state: string;
    cover: string;
    start: string;
    end: string;
    images: Array<string>;
    tech: string;
    link?: string;
    github?: string;
    video?: string;
    language: string;
    quote?: string;
}

export interface LinkObject {
    id: number;
    name: string;
    type: string;
    icon: string;
    link: string;
    alt?: string;
    tag?: string;
    hidden: boolean;
}

export interface SkillObject {
    name: string;
    level: number;
    hidden: boolean;
}
