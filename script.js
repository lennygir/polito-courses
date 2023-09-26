let imgs = [
  {
      "name": "Computer networks",
      "code": "i08KSILM"
  },
  {
      "name": "Object oriented programming",
      "code": "i04JEYLM"
  },
  {
      "name": "Operating systems",
      "code": "i04JEZLM"
  },
  {
      "name": "Signal analysis and processing",
      "code": "i02OGGLM"
  },
  {
      "name": "Big data processing and analytics",
      "code": "i01DSHOV"
  },
  {
      "name": "Computer architectures",
      "code": "i02LSEOV"
  },
  {
      "name": "Data Science and Database Technology",
      "code": "i01SQJOV"
  },
  {
      "name": "Computer network technologies and services",
      "code": "i01OTWOV"
  },
  {
      "name": "Advanced Machine Learning",
      "code": "i01URWOV"
  },
  {
      "name": "Information systems security",
      "code": "i01TYMOV"
  },
  {
      "name": "Cloud Computing Technologies",
      "code": "i01HFPOV"
  },
  {
      "name": "Computational intelligence",
      "code": "i01URROV"
  },
  {
      "name": "Distributed systems programming",
      "code": "i01TXZOV"
  },
  {
      "name": "Human Computer Interaction",
      "code": "i02JSKOV"
  },
  {
      "name": "Optimization methods and algorithms",
      "code": "i01OUVOV"
  },
  {
      "name": "Robot Learning",
      "code": "i01HFNOV"
  },
  {
      "name": "Software Engineering II",
      "code": "i01SQNOV"
  },
  {
      "name": "Convex optimization and engineering applications",
      "code": "i01OUWOV"
  },
  {
      "name": "Digital control technologies and architectures",
      "code": "i01PDCOV"
  },
  {
      "name": "Edge Computing Systems for AI and ML",
      "code": "i01DTDOV"
  },
  {
      "name": "GPU programming",
      "code": "i01URVOV"
  },
  {
      "name": "Network Dynamics and Learning",
      "code": "i02TXLOV"
  },
  {
      "name": "Automotive control systems",
      "code": "i03MIQOV"
  },
  {
      "name": "Modern design of control systems",
      "code": "i01PDXOV"
  },
  {
      "name": "Software architecture for automation",
      "code": "i01PECOV"
  },
  {
      "name": "Big data: architectures and data analytics",
      "code": "i01QYDOV"
  },
  {
      "name": "Internet Architecture and Technologies",
      "code": "i01HFQOV"
  },
  {
      "name": "Software Networking",
      "code": "i01SQPOV"
  },
  {
      "name": "Energy management for IoT",
      "code": "i01UDGOV"
  },
  {
      "name": "Internet Performance and Troubleshooting Lab",
      "code": "i01HFTOV"
  },
  {
      "name": "Specification and simulation of digital systems",
      "code": "i02LQDOV"
  },
  {
      "name": "System-on-chip architecture",
      "code": "i01QYHOV"
  },
  {
      "name": "Electronics for embedded systems",
      "code": "i01NWMOV"
  },
  {
      "name": "Operating systems for embedded systems",
      "code": "i02NPSOV"
  },
  {
      "name": "Testing and fault tolerance",
      "code": "i01RKZOV"
  },
  {
      "name": "Electronic systems engineering",
      "code": "i01NOKOV"
  },
  {
      "name": "Modeling and optimization of embedded systems",
      "code": "i01NWNOV"
  },
  {
      "name": "Programming for IoT applications",
      "code": "i03QWROV"
  },
  {
      "name": "Information systems",
      "code": "i01PDWOV"
  },
  {
      "name": "Computer Design",
      "code": "i01DLCOV"
  },
  {
      "name": "Design of Integrated Circuits",
      "code": "i01DLAOV"
  },
  {
      "name": "Industrial and Embedded Computer Systems Design",
      "code": "i01DKCOV"
  },
  {
      "name": "Real-time Systems",
      "code": "i01DLBOV"
  },
  {
      "name": "Architecture of Digital Systems I",
      "code": "i01DKOOV"
  },
  {
      "name": "Architecture of Digital Systems II",
      "code": "i01DKPOV"
  },
  {
      "name": "Microelectronic Circuit and System Design I",
      "code": "i01DKXOV"
  },
  {
      "name": "Operating systems",
      "code": "i02JEZOV"
  },
  {
      "name": "Synthesis and Optimization of Microelectronic Systems I",
      "code": "i01DKVOV"
  },
  {
      "name": "Verification of Digital Systems",
      "code": "i01DKUOV"
  },
  {
      "name": "Digital IC and Systems Design",
      "code": "i01DLGOV"
  },
  {
      "name": "Digital system design",
      "code": "i02KTJOV"
  },
  {
      "name": "Microfabrication",
      "code": "i01DLHOV"
  },
  {
      "name": "Secure Hardware and Embedded Devices",
      "code": "i01DKKOV"
  },
  {
      "name": "Electronic Systems Design - Specialization Course",
      "code": "i01DKEOV"
  },
  {
      "name": "Electronic Systems Design - Specialization Project",
      "code": "i01DKFOV"
  },
  {
      "name": "Low-Level Programming",
      "code": "i01DKDOV"
  },
  {
      "name": "Model-based Design of Embedded Systems",
      "code": "i01DJUOV"
  },
  {
      "name": "Power-Aware Embedded Systems",
      "code": "i01DJXOV"
  },
  {
      "name": "Real-Time Systems Lab",
      "code": "i01DJZOV"
  },
  {
      "name": "Safety and Reliability of Embedded Systems",
      "code": "i01DJVOV"
  },
  {
      "name": "Verification of Digital Systems (with Lab)",
      "code": "i01DJWOV"
  },
  {
      "name": "Wireless and Multimedia Systems",
      "code": "i01DJYOV"
  },
  {
      "name": "Control System Design",
      "code": "i01DKJOV"
  },
  {
      "name": "Research Methods and Project Preparation",
      "code": "i01DKLOV"
  },
  {
      "name": "Software Modelling Tools and Techniques for Critical Systems",
      "code": "i01DKIOV"
  },
  {
      "name": "Smart objects I",
      "code": "i01RDUOV"
  },
  {
      "name": "Data science I",
      "code": "i01RDQOV"
  },
  {
      "name": "Multimedia I",
      "code": "i05PABOV"
  },
  {
      "name": "Data science I",
      "code": "i02RDQOV"
  },
  {
      "name": "Security I",
      "code": "i01RDSOV"
  },
  {
      "name": "Smart objects I",
      "code": "i02RDUOV"
  },
  {
      "name": "Data science I",
      "code": "i03RDQOV"
  },
  {
      "name": "Smart objects I",
      "code": "i03RDUOV"
  },
  {
      "name": "TOP-UIC - Informatica",
      "code": "i01PAJOV"
  }
]

function checkIfImageExists(url, callback) {
  const img = new Image();
  img.src = url;

  if (img.complete) {
      callback(true);
  } else {
      img.onload = () => callback(true);

      img.onerror = () => callback(false);
  }
}

let form = document.querySelector("#list form");
let timeTable = document.querySelector("#time-table");

for(let img of imgs) {
  checkIfImageExists(`img/${img.code}.png`, (exists) => {
      if (!exists) {
          return;
      }

      // LIST
      let wrapper = document.createElement("div");

      let element = document.createElement("input");
      element.type = "checkbox";
      element.id = img.code;
      element.name = 'course';
      element.value = img.code;
      element.addEventListener('change', (event) => {
          let value = event.currentTarget.value;
          if (event.currentTarget.checked) {
              document.querySelector(`img#${value}`).style.display = 'block';
          } else {
              document.querySelector(`img#${value}`).style.display = 'none';
          }
      });
      wrapper.appendChild(element);

      element = document.createElement("label");
      element.for = img.code;
      element.textContent = img.name + ' (' + img.code.substr(1) + ')';
      wrapper.appendChild(element);

      form.appendChild(wrapper);

      // IMAGES
      let image = document.createElement("img");
      image.src = `img/${img.code}.png`;
      image.id = img.code;
      image.style.display = "none";
      timeTable.appendChild(image);
  })
}