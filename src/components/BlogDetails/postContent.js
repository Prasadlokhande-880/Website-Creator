import React from "react";

const PostContent = () => {
  return (
    <div className="container max-w-5xl mx-auto -mt-32">
      <div className="mx-0 sm:mx-6">
        <div
          className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <p className="text-2xl md:text-3xl mb-5">
            Welcome fellow{" "}
            <a
              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
              href="https://www.tailwindcss.com"
            >
              Tailwind CSS
            </a>{" "}
            and{" "}
            <a
              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
              href="https://www.ghost.org"
            >
              Ghost
            </a>{" "}
            fan. This starter template is an attempt to replicate the default
            Ghost theme{" "}
            <a
              className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
              href="https://demo.ghost.io/welcome"
            >
              "Casper"
            </a>{" "}
            using Tailwind CSS and vanilla Javascript.
          </p>

          <p className="py-6">
            The basic blog page layout is available and all using the default
            Tailwind CSS classes (although there are a few hardcoded style
            tags). If you are going to use this in your project, you will want
            to convert the classes into components.
          </p>

          <p className="py-6">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna.
          </p>

          <ol>
            <li className="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi.
            </li>
            <li className="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo.
            </li>
            <li className="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae.
            </li>
          </ol>

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Crocodiles are easy. They try to kill and eat you. People are
            harder. Sometimes they pretend to be your friend first.
            <br />- Steve Irwin
          </blockquote>

          <p className="py-6">What's the output?</p>
          <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
            <code className="break-words whitespace-pre-wrap">
              {`let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
