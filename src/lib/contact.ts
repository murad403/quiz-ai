import { IconType } from 'react-icons';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';

export type TContact = {
    id: number;
    label: string;
    value: string;
    icon: IconType;
    href?: string;
};

export const contactInfo: TContact[] = [
    {
        id: 1,
        label: "Email",
        value: "support@quizai.com",
        icon: HiOutlineMail,
        href: "mailto:support@quizai.com",
    },
    {
        id: 2,
        label: "Office",
        value: "123 Education Street, San Francisco, CA 94102",
        icon: HiOutlineLocationMarker,
    },
    {
        id: 3,
        label: "Phone",
        value: "+1 (555) 123-4567",
        icon: HiOutlinePhone,
    },
];