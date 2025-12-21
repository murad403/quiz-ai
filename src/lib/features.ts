import { IconType } from "react-icons";
import { BsShare } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoBarChartOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbChartCandle } from "react-icons/tb";

export type TFeature = {
    title: string;
    description: string;
    icon: IconType;
}

export const features: TFeature[] = [
    {
        title: "AI-Powered Generation",
        description: "Create comprehensive quizzes from any topic or text in seconds using advanced AI technology",
        icon: HiOutlineLightBulb
    },
    {
        title: "Customizable Questions",
        description: "Edit, refine, and customize AI-generated questions to perfectly match your teaching needs",
        icon: TbChartCandle
    },
    {
        title: "Easy Sharing",
        description: "Share quiz links instantly with students - no accounts or complicated setup required",
        icon: BsShare
    },
    {
        title: "Real-Time Analytics",
        description: "View detailed performance metrics and identify areas where students need more support",
        icon: IoBarChartOutline
    },
    {
        title: "Save Time",
        description: "Reduce quiz creation time from hours to minutes while maintaining high quality standards",
        icon: IoTimeOutline
    },
    {
        title: "Secure & Private",
        description: "Your data is encrypted and secure. We never share or sell your information",
        icon: MdOutlineVerifiedUser
    },
]