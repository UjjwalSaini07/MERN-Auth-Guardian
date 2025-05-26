import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../components/utils/date";
import { User, Calendar, LogOut, Settings } from "lucide-react";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700"
    >
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
        Welcome, {user.name.split(" ")[0]}!
      </h2>

      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <User className="text-green-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold text-green-400">Profile Information</h3>
          </div>
          <p className="text-gray-300">Name: <span className="font-medium">{user.name}</span></p>
          <p className="text-gray-300">Email: <span className="font-medium">{user.email}</span></p>
          <p className="text-gray-300">Role: <span className="font-medium">{user.role || "User"}</span></p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <Calendar className="text-green-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold text-green-400">Account Activity</h3>
          </div>
          <p className="text-gray-300">
            <span className="font-bold">Joined:</span> {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Last Login:</span> {formatDate(user.lastLogin)}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Posts Created:</span> {user.posts || 0}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 flex justify-between items-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <Settings className="w-5 h-5" />
          Edit Profile
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
