"use client"
import { clearTokens } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';

const LogoutModal = () => {
    const router = useRouter();
    const handleLogout = async() => {
        try {
            await clearTokens();
            (document.getElementById('my_modal_1') as HTMLDialogElement)?.close();
            router.push("/auth/sign-in");
            toast.success("Logout successfully!");
        } catch (error) {
            toast.error("Please try again");
        }
    };
    return (
        <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-card border border-gray-700/50 shadow-xl rounded-xl p-5">

                <div className="flex justify-center mb-4">
                    <div className="p-4 bg-green-500/10 rounded-full">
                        <FiLogOut size={35} className="text-green-500" />
                    </div>
                </div>

                <h3 className="text-main text-heading font-semibold text-center mb-3">
                    Logout Confirmation
                </h3>
                <p className="text-title text-center text-normal mb-8">
                    Are you sure you want to log out of your account?
                </p>


                <div className="modal-action flex justify-center gap-10">

                    <form method="dialog">
                        <button className="border border-gray-700/50 py-2 px-6 rounded-lg text-main transition font-medium">
                            Cancel
                        </button>
                    </form>
                    <button
                        onClick={handleLogout}
                        className="bg-header hover:bg-header/90 rounded-lg py-2 px-6 text-main font-medium transition"
                    >
                        Yes, Logout
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export default LogoutModal