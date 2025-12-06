import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNode,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { scaleIn } from '../../utils/animations';
import { skillLevels } from '../../data/skills';

const SkillCard = ({ skill, index }) => {
  // Icon mapping
  const iconMap = {
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaJs: FaJs,
    FaReact: FaReact,
    FaJava: FaJava,
    FaNode: FaNode,
    FaCode: FaCode,
    FaDatabase: FaDatabase,
    FaBrain: FaCode, // Using FaCode as placeholder
    FaGitAlt: FaGitAlt,
    FaGithub: FaGithub,
    SiMysql: SiMysql,
    VscCode: FaCode // Using FaCode as placeholder
  };

  const Icon = iconMap[skill.icon] || FaCode;
  const levelInfo = skillLevels[skill.level] || skillLevels.Beginner;

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: `0 10px 30px ${skill.color}40`
      }}
      className="bg-dark-bg p-6 rounded-lg border border-dark-border hover:border-accent-blue transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          style={{ color: skill.color }}
          className="text-5xl"
        >
          <Icon />
        </motion.div>

        {/* Skill Name */}
        <h4 className="text-lg font-heading font-semibold text-white">
          {skill.name}
        </h4>

        {/* Level Badge */}
        <div className="flex flex-col items-center space-y-2 w-full">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${levelInfo.color}20`,
              color: levelInfo.color
            }}
          >
            {skill.level}
          </span>

          {/* Progress Bar */}
          <div className="w-full bg-dark-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${levelInfo.percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
