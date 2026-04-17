import { motion } from "framer-motion";
import { CV_ROLES } from "../../data/cvConfig";

interface RoleSelectorProps {
  onSelect: (roleId: string) => void;
}

const EASE = [0.23, 1, 0.32, 1] as const;

export default function RoleSelector({ onSelect }: RoleSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-1">Select a CV Angle</h3>
      <p className="text-gray-400 text-sm mb-5">
        Choose the version that best matches the role you are hiring for
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CV_ROLES.map((role, i) => {
          const Icon = role.icon;
          return (
            <motion.button
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
              onClick={() => onSelect(role.id)}
              className="group flex items-start gap-3 p-4 rounded-xl text-left transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(0,232,157,0.4)",
                boxShadow: "0 0 20px rgba(0,232,157,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                style={{
                  background: "rgba(0,232,157,0.1)",
                  border: "1px solid rgba(0,232,157,0.2)",
                }}
              >
                <Icon size={18} className="text-[#00e89d]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-[#00e89d] transition-colors duration-200">
                  {role.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {role.description}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
