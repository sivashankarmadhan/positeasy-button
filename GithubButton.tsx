import React from "react";
import { FaGithub } from "react-icons/fa";

interface GithubButtonProps {
  repoUrl: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ repoUrl }) => {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
    >
      <FaGithub className="w-5 h-5" />
      <span>View on GitHub</span>
    </a>
  );
};

export default GithubButton;

