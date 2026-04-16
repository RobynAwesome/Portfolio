import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, CheckCircle2 } from "lucide-react";
import RoleSelector from "./RoleSelector";
import FormatSelector from "./FormatSelector";
import RecruiterForm from "./RecruiterForm";
import { CV_ROLES } from "../../data/cvConfig";

interface CVPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

export default function CVPickerModal({ isOpen, onClose }: CVPickerModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<"pdf" | "docx" | null>(null);

  const reset = () => {
    setStep(1);
    setSelectedRole(null);
    setSelectedFormat(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setStep(2);
  };

  const handleFormatSelect = (format: "pdf" | "docx") => {
    setSelectedFormat(format);
    setStep(3);
  };

  const handleFormSubmit = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
  }) => {
    const role = CV_ROLES.find((r) => r.id === selectedRole);
    if (!role || !selectedFormat) return;

    const response = await fetch("/api/cv-download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        roleId: role.id,
        format: selectedFormat,
      }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      throw new Error(payload?.error || "Download failed.");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Kholofelo_Robyn_CV_${role.label.replace(/[^a-zA-Z0-9]/g, "_")}.${selectedFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setStep(4);
    setTimeout(handleClose, 2000);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const selectedRoleLabel = CV_ROLES.find((r) => r.id === selectedRole)?.label;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{
              background: "rgba(8,14,28,0.97)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
            }}
          >
            {/* Top accent line */}
            <div
              className="h-[2px] w-full"
              style={{
                background: "linear-gradient(90deg, transparent, #00e89d, #0ea5e9, transparent)",
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <div className="flex items-center gap-3">
                {step > 1 && step < 4 && (
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={handleBack}
                    aria-label="Go back"
                    className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <ArrowLeft size={16} className="text-gray-400" />
                  </motion.button>
                )}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: step >= s ? 24 : 8,
                        background:
                          step >= s
                            ? "linear-gradient(90deg, #00e89d, #34d399)"
                            : "rgba(255,255,255,0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close CV picker"
                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X size={16} className="text-gray-400" />
              </button>
            </div>

            {/* Breadcrumb */}
            {step > 1 && step < 4 && (
              <div className="px-6 pb-2">
                <p className="text-xs text-gray-500">
                  {selectedRoleLabel}
                  {selectedFormat && ` · ${selectedFormat.toUpperCase()}`}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="px-6 pb-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <RoleSelector onSelect={handleRoleSelect} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <FormatSelector onSelect={handleFormatSelect} />
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <RecruiterForm onSubmit={handleFormSubmit} />
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <CheckCircle2
                      size={56}
                      className="text-[#00e89d] mb-4"
                    />
                    <p className="text-white font-bold text-lg">
                      Download started!
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Thank you for your interest
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
