import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const SkillArc = ({ name, percent }: any) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="skill-arc-container">
        <svg className="skill-arc-svg" width="60" height="60">
          <circle className="skill-arc-bg" cx="30" cy="30" r={radius} />
          <motion.circle
            className="skill-arc-value"
            cx="30"
            cy="30"
            r={radius}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">
          {percent}%
        </div>
      </div>
      <span className="text-[11px] leading-tight opacity-90">{name}</span>
    </div>
  );
};

const ProgrammingSkill = ({ name, percent }: any) => {
  return (
    <li className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs opacity-70">{percent}%</span>
      </div>
      <div className="prog-bar-bg">
        <motion.div
          className="prog-bar-value"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </li>
  );
};

export default function App() {
  const skills = [
    { name: "前端網頁開發(html/css/js)", percent: 95 },
    { name: "後端網頁 (laravel)", percent: 80 },
    { name: "平面設計/插畫", percent: 85 },
    { name: "品牌視覺規劃 (CIS)", percent: 75 },
    { name: "介面/網頁設計 (UI/UX)", percent: 90 },
    { name: "AutoCAD製圖/程式開發(Lisp)", percent: 85 },
    { name: "3D建模彩現", percent: 70 },
    { name: "設計企劃/專案管理", percent: 80 },
  ];

  const programmingSkills = [
    { name: "C++", percent: 70 },
    { name: "VB.net", percent: 60 },
    { name: "AutoLisp", percent: 85 },
    { name: "Verilog", percent: 50 },
    { name: "Python", percent: 75 },
    { name: "Html/Css/Js", percent: 95 },
    { name: "Pug/Sass", percent: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="resume-container rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="left-panel">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-black mb-2 tracking-tighter">吳哲宇</h1>
            <h4 className="text-lg opacity-60 font-light mb-6">動畫互動網頁程式入門講師 | 墨雨設計負責人</h4>
            <hr className="border-white/20 mb-6" />
            <p className="text-sm leading-relaxed opacity-80 mb-8">
              動畫互動網頁程式入門講師、墨雨設計 Monoame Design 負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。
            </p>

            <div className="flex gap-4 mb-12">
              <a
                href="http://www.monoame.com"
                target="_blank"
                className="bg-[#f1c40f] text-[#2c3e50] px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                referrerPolicy="no-referrer"
              >
                作品集 <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/frank890417"
                target="_blank"
                className="border border-white/30 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
                referrerPolicy="no-referrer"
              >
                Github <Github size={14} />
              </a>
            </div>

            <div className="mb-12">
              <h4 className="text-[10px] uppercase tracking-[3px] opacity-50 mb-1">Skills</h4>
              <h2 className="text-2xl font-bold mb-6">專業技能</h2>
              <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                {skills.map((skill, index) => (
                  <SkillArc key={index} name={skill.name} percent={skill.percent} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[3px] opacity-50 mb-1">Programming Skill</h4>
              <h2 className="text-2xl font-bold mb-6">程式技能</h2>
              <ul className="list-none p-0">
                {programmingSkills.map((skill, index) => (
                  <ProgrammingSkill key={index} name={skill.name} percent={skill.percent} />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <h4>Experience / Works</h4>
              <h2>經歷與作品</h2>
              <ul className="experience-list list-none p-0">
                <li className="year-block">
                  <span className="year">2014</span>
                  <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                    <li>康師傅 活動用體感切醬料包遊戲 程式開發</li>
                    <li>交大電機 高中生專區 網頁設計 / 開發</li>
                    <li>長庚醫院 聲熱石墨希 腦瘤治療新契機3D 動畫</li>
                  </ul>
                </li>
                <li className="year-block">
                  <span className="year">2015</span>
                  <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                    <li>RemyMartin & Selinko 智慧酒瓶認證 UI/UX</li>
                    <li>Dyverse Studio 歧響音樂 互動官網 設計 / 開發</li>
                  </ul>
                </li>
                <li className="year-block">
                  <span className="year">2016</span>
                  <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                    <li>Complex Festival 複雜生活節互動官網 設計 / 開發</li>
                    <li>花旗聯合勸募官網 設計 / 開發</li>
                    <li>世界健康大會官網 設計 / 開發</li>
                    <li>雜學校展覽 網頁開發</li>
                    <li>開設動畫互動網頁程式入門線上課程</li>
                  </ul>
                </li>
                <li className="year-block">
                  <span className="year">2017</span>
                  <ul className="list-disc list-inside text-sm space-y-1 opacity-80">
                    <li>台北聲音地景計畫官網 設計 / 開發</li>
                    <li>工研院綠能所 節電官網 設計/開發</li>
                    <li>睿軒 / 睿田生技公司官網開發</li>
                    <li>D-school 台大創新設計學院網站 設計 / 開發</li>
                    <li>開設動畫互動網頁特效入門線上課程</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contests</h4>
              <h2>比賽經歷</h2>
              <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
                <li>宏碁數位創作獎第五屆首獎</li>
                <li>宏碁數位創作獎第六屆首獎</li>
                <li>宏碁數位創作獎第七屆首獎暨評審團大獎</li>
                <li>宏碁數位創作獎第八屆優勝</li>
                <li>宏碁數位創作獎第九屆首獎暨評審團大獎</li>
                <li>智慧鐵人競賽高職組首獎</li>
                <li>梅竹黑客松 微軟組首獎</li>
                <li>經濟部智慧城市黒客松 實踐組首獎</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
