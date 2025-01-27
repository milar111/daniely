import { title } from "process";


export const icons = [
    {
        id : '0',
        name: "Arduino",
        icon: "./icons/arduino.svg",
    },
    {
        id : '1',
        name: "C",
        icon: "./icons/c.svg",
    },
    {
        id : '2',
        name: "CircuitPython",
        icon: "./icons/circuitpython.svg",
    },
    {
        id : '3',
        name: "Figma",
        icon: "./icons/figma.svg",
    },
    {
        id : '4',
        name: "FramerMotion",
        icon: "./icons/fm.svg",
    },
    {
        id : '5',
        name: "GitHub",
        icon: "./icons/github.svg",
    },
    {
        id : '6',
        name: "Instagram",
        icon: "./icons/instagram.svg",
    },
    {
        id : '7',
        name: "JavaScript",
        icon: "./icons/js.svg",
    },
    {
        id : '8',
        name: "NextJS",
        icon: "./icons/next.svg",
    },
    {
        id : '9',
        name: "Python",
        icon: "./icons/python.svg",
    },
    {
        id : '10',
        name: "React",
        icon: "./icons/react.svg",
    },
    {
        id : '11',
        name: "TailwindCSS",
        icon: "./icons/tailwind.svg",
    },
    {
        id : '12',
        name: "ThreeJS",
        icon: "./icons/three.svg",
    },
    {
        id : '13',
        name: "TikTok",
        icon: "./icons/tiktok.svg",
    },
    {
        id : '14',
        name: "TypeScript",
        icon: "./icons/ts.svg",
    },
    {
        id : '15',
        name: "X",
        icon: "./icons/x.svg",
    },
    {
        id : '16',
        name: "YouTube",
        icon: "./icons/youtube.svg",
    },
    {
        id: '17',
        name: "Adafruit",
        icon: "./icons/adafruit.svg",
    },
    {
        id: '18',
        name: "Selenium",
        icon: "./icons/selenium.svg",
    },
    {
        id: '19',
        name: "ZMK",
        icon: "./icons/zmk.svg",
    }
];

export const technologies = [
    '0', // Arduino
    '1', // C
    '2', // CircuitPython
    '3', // Figma
    '7', // JavaScript
    '9', // Python
    '10', // React
    '11', // TailwindCSS
    '14', // TypeScript
  ];

export const socialmedia = [
    {
        id: '0',
        name: 'Github',
        link: 'https://github.com/milar111',
        iconId: '5',
        width: '30',
        height: '30',
    },
    {
        id: '1',
        name: 'Instagram',
        link: 'https://www.instagram.com/danielyordanov79/',
        iconId: '6',
        width: '33',
        height: '33',
    },
    {
        id: '2',
        name: 'X',
        link: 'https://x.com/dyordanov101',
        iconId: '15',
        width: '30',
        height: '30',
    },
    {
        id: '3',
        name: 'YouTube',
        link: 'https://www.youtube.com/',
        iconId: '16',
        width: '35',
        height: '35',
    },
    {
        id: '4',
        name: 'Tiktok',
        link: 'https://www.tiktok.com/@d.yordanov101',
        iconId: '13',
        width: '25',
        height: '25',
    },
  ];

  export const projects = [
    {
        id: 'Corne',
        image: ['./images/Corne/im1.jpg', './images/Corne/im2.jpg', './images/Corne/im3.jpg'],
        title: 'Corne',
        description: 'Wireless Ergonomic Split Keyboard. Budget-friendly keyboard based on the Corne layout.',
        GitHubLink: 'https://github.com/milar111/Corne',
        YouTubeLink: '',
        technologies: ["19"],
        briefDescription: "This project showcases a DIY wireless split keyboard built around the Corne layout using affordable Pro Micro nRF52840 controllers. It features Bluetooth functionality, ZMK firmware, and a low-profile, ergonomic design tailored for comfort and portability.",
        problemStatement: "Traditional wireless ergonomic keyboards are often expensive, limiting accessibility for enthusiasts and hobbyists. This project solves this by offering a cost-effective DIY alternative that maintains functionality, comfort, and reliability.",
        keyFeatures: "This DIY wireless split keyboard offers fully wireless functionality through Bluetooth connectivity and features an ergonomic split design based on the Corne layout. Its low-profile build ensures portability, while the use of Pro Micro nRF52840 controllers provides cost efficiency and reliability. Powered by ZMK firmware, it allows extensive customization, and its energy-efficient design ensures a battery life of over one month.",
    },

    {
        id: 'MacroKeyboard',
        image: ['./images/MacroKeyboard/im1.png', './images/MacroKeyboard/im2.png', './images/MacroKeyboard/im3.png', './images/MacroKeyboard/im4.png'],
        title: 'MacroKeyboard',
        description: 'MacroKeyboard controls volume, sends keystrokes, and displays real-time info.',
        GitHubLink: 'https://github.com/milar111/MacroKeyboard-MFMKWCM-',
        YouTubeLink: '',
        technologies: ["9", "2", "17"],
        briefDescription: "The MacroKeyboard-MFMKWCM project integrates a USB HID keyboard with an OLED display to create a versatile input/output device. It offers programmable key functions, real-time display of system information, volume control, and even a built-in Dino game, all powered by CircuitPython.",
        problemStatement: "The project addresses the need for a multifunctional tool that combines input devices, such as keypads and rotary encoders, with visual feedback on an OLED screen. It offers a compact solution for custom keyboard shortcuts, system information display, and media control, enhancing productivity and user interaction.",
        keyFeatures: "Custom Keypad Interface: Program each key to perform specific actions like sending keystrokes or launching apps.OLED Display: Shows real-time data (e.g., time, temperature) and includes a Dino game. Volume Control: Adjust the system volume using a rotary encoder with mute functionality. Dino Game: A simple game displayed on the OLED and controlled via the keypad.",
    },


    {
        id: 'LOID_V1',
        image: ['./images/LOID_V1/im1.png', './images/LOID_V1/im2.png'],
        title: 'LOID_V1',
        description: 'LOID automates student logins and logouts on Google Classroom efficiently.',
        GitHubLink: 'https://github.com/milar111/LOID_prototype1',
        YouTubeLink: '',
        technologies: ["9", "2", "17", "18"],
        briefDescription: "The LOID (Log Out/In Device) project is a smart authentication tool for students, enabling seamless login and logout on online platforms like Google Classroom using a personalized device powered by Raspberry Pi Pico and physical switches. However, it is important to note that the project may not work with future updates from Google and will not be actively supported or further developed.",
        problemStatement: "The project addresses the inefficiency of manual student login/logout on educational platforms by automating the process with a secure, device-based system, reducing errors and saving time during authentication.",
        keyFeatures: "Automated Login/Logout: Simplifies Google Classroom authentication using physical switches. Secure Credential Handling: Credentials are encoded for safe transmission to a host computer. User-Friendly Interface: Features a 128x64 display and customizable animations. Raspberry Pi Pico Integration: Easy to set up and operate with CircuitPython support.",
    },
    
    {
        id: 'OmniCar',
        image: ['./images/OmniCar/im1.png', './images/OmniCar/im2.png'],
        title: 'OmniCar',
        description: 'Wireless omnidirectional robot controlled via web interface using ESP.',
        GitHubLink: 'https://github.com/milar111/OmniCar',
        YouTubeLink: '',
        technologies: ["0"],
        briefDescription: "This project is an omnidirectional robot control system built using an ESP microcontroller. It allows users to control the movement of the robot in real time via a web-based interface hosted on the ESP itself. The robot's motors are controlled using WebSocket commands sent from the interface, and the ESP creates its own WiFi network to facilitate the communication.",
        problemStatement: "Traditional robot control systems often require specialized hardware, complex communication setups, or wired connections, limiting ease of use and flexibility. This project seeks to overcome these challenges by providing a wireless, real-time control system for an omnidirectional robot that can be accessed from any device with a web browser. By using an ESP microcontroller, the solution eliminates the need for external routers and streamlines motor control, making it simpler and more accessible for users.",
        keyFeatures: "WiFi Access Point: The ESP acts as a standalone access point, eliminating the need for external network infrastructure. Real-Time Control: Uses WebSockets to send motor control commands instantly, allowing for smooth and responsive robot movements. Omnidirectional Movement: Supports forward, backward, turning, and diagonal movements, with precise control over each motor. Web-Based Interface: A responsive HTML interface is served by the ESP, enabling control via any device with a web browser, no additional apps required. Simple Setup: Easy-to-configure WiFi and motor setup with intuitive control buttons for each movement type.",
    },

    {
        id: 'SunFollower',
        image: ['./images/SunFollower/im1.png', './images/SunFollower/im2.png', './images/SunFollower/im3.png'],
        title: 'SunFollower',
        description: 'Solar-following robot maximizes energy from solar panels.',
        GitHubLink: '',
        YouTubeLink: '',
        technologies: [],
        briefDescription: "This project features a solar-following robot designed to optimize solar energy collection by adjusting its position throughout the day. It employs four solar panels arranged in pairs to track the sun's movement both vertically and horizontally. The robot uses two motors to facilitate this movement, ensuring that the solar panels maintain a direct line of sight to the sun at all times. By continuously aligning itself with sunlight, the robot enhances energy efficiency and maximizes the power harvested from the solar panels, providing a practical solution for improving solar energy utilization.",
        problemStatement: "Static solar panels often fail to capture optimal sunlight due to changing sun positions throughout the day. This project addresses this issue by employing a solar-following mechanism that dynamically adjusts panel angles, significantly increasing energy efficiency and collection compared to fixed installations.",
        keyFeatures: "Dynamic Sun Tracking: Utilizes solar panel orientation to maximize sunlight exposure. Simple Motor Control: Two motors drive the robot's movement in both vertical and horizontal directions. Modular Design: Built on a 3D-printed base for easy customization and assembly. Cost-Effective Solution: Operates without microcontrollers, relying on solar panel feedback for direction. Increased Energy Efficiency: Enhances solar energy collection compared to stationary systems.",
    },

];
