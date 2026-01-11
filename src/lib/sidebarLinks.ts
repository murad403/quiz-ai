import { IconType } from "react-icons";
import { CiHome } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

export type TSidebarLink = {
    name: string;
    href: string;
    icon: IconType
}

export const sidebarLinks: TSidebarLink[] = [
    { name: 'overview', href: '/profile', icon: CiHome},
    { name: 'my Quizzes', href: '/profile/quizzes', icon: IoDocumentTextOutline},
    { name: 'create quiz', href: '/profile/create-quiz', icon: GoPlus},
    { name: 'analytics', href: '/profile/analytics', icon: TbBrandGoogleAnalytics},
    { name: 'settings', href: '/profile/settings', icon: IoSettingsOutline},
] 