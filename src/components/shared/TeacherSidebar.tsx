"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { sidebarLinks, TSidebarLink } from '@/lib/sidebarLinks';

interface SidebarProps {
    onClose?: () => void
}

const TeacherSidebar = ({ onClose }: SidebarProps) => {
    const pathName = usePathname();
    
    const handleLinkClick = () => {
        if (onClose) {
            onClose()
        }
    }

    return (
        <div className='bg-card h-screen sticky top-0 border-r border-gray-700/50 py-8 flex flex-col justify-between'>
            {/* Close Button for Mobile */}
            {onClose && (
                <button 
                    onClick={onClose}
                    className='absolute top-4 right-4 text-title hover:text-main lg:hidden'
                >
                    <IoClose size={24} />
                </button>
            )}

            <div>
                <div className='flex justify-center mb-8'>
                    <Link 
                        className='text-subheading text-main font-semibold' 
                        href={"/"}
                        onClick={handleLinkClick}
                    >
                        Quizai
                    </Link>
                </div>
                <ul className='px-4 flex flex-col gap-2'>
                    {
                        sidebarLinks.map((link: TSidebarLink) => (
                            <li key={link.name} className='flex justify-center'>
                                <Link 
                                    className={`flex items-center gap-2 w-full transition-colors duration-200 px-4 rounded-lg py-2 capitalize ${
                                        pathName === link.href 
                                            ? 'text-main font-medium bg-header' 
                                            : 'text-title hover:bg-gray-600'
                                    }`} 
                                    href={link.href}
                                    onClick={handleLinkClick}
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='mx-4'>
                <button 
                    onClick={() => {
                        (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()
                        if (onClose) onClose()
                    }} 
                    className='w-full text-start px-4 text-main font-semibold py-2 rounded-lg bg-header hover:bg-header/90 flex items-center gap-2'
                >
                    <MdOutlineLogout size={25} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default TeacherSidebar;