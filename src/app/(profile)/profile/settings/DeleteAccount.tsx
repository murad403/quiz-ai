"use client"
import { useDeleteUserMutation } from '@/redux/features/dashboard/dashboard.api';
import { clearTokens } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteAccount = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const router = useRouter();

  const handleDeleteAccount = () => {
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteUser(undefined).unwrap();
      setShowConfirmModal(false);
      toast.success("Account deleted successfully.");
      await clearTokens();
      router.push('/');
    } catch (error) {
      // console.error("Failed to delete account:", error);
      toast.error("Failed to delete account. Please try again later.");
    }
  };

  return (
    <>
      <div className="bg-card border border-red-500/50 rounded-lg p-4">
        <h2 className="text-red-500 font-semibold text-subheading">Danger Zone</h2>
        <p className="text-title text-paragraph">Irreversible actions</p>

        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-600 text-main font-medium px-4 py-2 rounded-lg transition-colors mt-6"
        >
          Delete Account
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-card/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-gray-700/50 rounded-lg p-4 max-w-md w-full">
            <h3 className="text-main font-medium text-subheading mb-2">Delete Account?</h3>
            <p className="text-title text-paragraph text-sm mb-6">
              This action cannot be undone. All your data, quizzes, and settings will be permanently deleted.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 hover:bg-gray-700/50 text-main font-medium px-4 py-2 rounded-lg transition-colors border border-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 bg-red-500 hover:bg-red-600 text-main font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAccount;