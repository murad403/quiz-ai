export type TNavLink = {
    id: number;
    label: string;
    route: string;
}

export const navLinks: TNavLink[] = [
    { id: 1, label: 'Features', route: '#features' },
    { id: 2, label: 'How it Works', route: '#how-it-works' },
    { id: 6, label: 'Testimonials', route: '#testimonials' },
    { id: 7, label: 'Pricing', route: '#pricing' },
]