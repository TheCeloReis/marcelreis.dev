import React from "react";

import styles from "./.module.scss";

export const Waves = () => (
  <div className={styles.waveArea}>
    {[0, 1, 0, 1].map((variant, index) => (
      <div className={styles.waveContainer} key={index}>
        <Wave variant={variant} />
      </div>
    ))}
  </div>
);

const WavePaths = [
  "M0,96L26.7,101.3C53.3,107,107,117,160,154.7C213.3,192,267,256,320,250.7C373.3,245,427,171,480,154.7C533.3,139,587,181,640,192C693.3,203,747,181,800,186.7C853.3,192,907,224,960,202.7C1013.3,181,1067,107,1120,112C1173.3,117,1227,203,1280,208C1333.3,213,1387,139,1413,101.3L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
  "M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,186.7C672,192,768,224,864,202.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
];
type WavePropsType = {
  className?: string;
  variant?: number;
  color?: string;
};
export const Wave = ({ variant }: WavePropsType) => (
  <svg
    className={styles.svg}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path fill={"#fff"} fillOpacity="1" d={WavePaths[variant || 0]} />
  </svg>
);
