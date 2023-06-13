import React from "react";

const Introduction = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFBF23"
          fillOpacity="1"
          d="M0,64L60,80C120,96,240,128,360,149.3C480,171,600,181,720,170.7C840,160,960,128,1080,106.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div>
        <div className="bg-yellowish pb-10 md:pb-28">
          <div className="container md:flex justify-between">
            <h1 className="max-w-[350px]  leading-normal">
              With the Right Software, Great Things Can Happen
            </h1>
            <p className="md:max-w-md tracking-wider leading-snug">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
