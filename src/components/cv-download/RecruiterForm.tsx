import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";

interface RecruiterFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
  }) => Promise<void>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RecruiterForm({ onSubmit }: RecruiterFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!EMAIL_RE.test(form.email)) e.email = "Enter a valid email";
    if (!form.companyName.trim()) e.companyName = "Company name is required";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await onSubmit(form);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Download failed.");
      setSubmitting(false);
    }
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const fields = [
    { key: "firstName", label: "First Name", placeholder: "Jane", type: "text" },
    { key: "lastName", label: "Last Name", placeholder: "Smith", type: "text" },
    { key: "email", label: "Work Email", placeholder: "jane@company.com", type: "email" },
    { key: "companyName", label: "Company", placeholder: "Acme Corp", type: "text" },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-1">Your Details</h3>
      <p className="text-gray-400 text-sm mb-5">
        Quick intro so Robyn knows who's interested
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <label htmlFor={f.key} className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
              {f.label}
            </label>
            <input
              id={f.key}
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.key as keyof typeof form]}
              onChange={(e) => update(f.key, e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: errors[f.key]
                  ? "1px solid rgba(239,68,68,0.6)"
                  : "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(0,232,157,0.5)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = errors[f.key]
                  ? "rgba(239,68,68,0.6)"
                  : "rgba(255,255,255,0.1)")
              }
            />
            {errors[f.key] && (
              <p className="text-red-400 text-xs mt-1">{errors[f.key]}</p>
            )}
          </motion.div>
        ))}

        {submitError && (
          <p className="text-sm text-red-400">{submitError}</p>
        )}

        <motion.button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 mt-2"
          style={{
            background: submitting
              ? "rgba(0,232,157,0.3)"
              : "linear-gradient(135deg, #00e89d, #34d399)",
            color: "#060d18",
          }}
          whileHover={submitting ? {} : { scale: 1.02, boxShadow: "0 0 24px rgba(0,232,157,0.3)" }}
          whileTap={submitting ? {} : { scale: 0.98 }}
        >
          {submitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Download size={16} />
          )}
          {submitting ? "Preparing..." : "Download CV"}
        </motion.button>
      </form>
    </div>
  );
}
