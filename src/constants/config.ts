type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Nguyen Cao Duy - Developer",
    fullName: "Nguyen Cao Duy",
    email: "dnc221297@gmail.com",
  },
  hero: {
    name: "Nguyen Cao Duy",
    p: ["I'm Fullstack Developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `- More than 4 years of programming experience since school. More than 2 years of working experience in product design industry.
                Have 2 years of experience building websites using Wordpress.
                Have good communication skills and learn quickly.
                Strengths: Front-end technology, UI-UX.
                Proficient in HTML, CSS, SCSS, SASS Javascript, Bootstraps.
                Proficient in JavaScript, including DOM manipulation and JavaScript object model.
                Experience with data structure libraries.
                Experience in using frameworks such as: jQuery, Local Storage; ReactJS; Redux.
                Know how to use source code management tools: GIT.
                Proficient in the use of operating systems: Windows, MacOS.
                Ability to learn and apply new technology quickly.
                Current place of work: Ho Chi Minh, Vietnam.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
