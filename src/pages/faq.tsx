import { Collapse, Text } from '@geist-ui/core';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const FAQ = () => {
  const FAQList = [
    {
      Name: 'AvdanOS',
      Questions: [
        {
          Title: 'What will AvdanOS be?',
          SubTitle: '',
          Answer:
            "We are simply doing a Desktop Environment. But don't get too mad, we don't need more than that. We do not need to code or package a whole OS.\n\n> **Linux package =** “package” refers to a **compressed file archive containing all of the files that come with a particular application**. The files are usually stored in the package according to their relative installation paths on your system. Most packages also contain installation instructions for the OS, as well as a list of any other packages that are dependencies (prerequisites required for installation.\n> \n\n🧠 This means that we will need to simply just make a desktop environment and package it. Linux will figure it out.\n\nThere is a **huge misconception that the UI you see when you use a particular OS is the OS itself**. It is not. Those are 2 completely different things. The **OS** is what *screws around with all the hardware* you have (i.e. the Kernel and the System Programs). The **applications** (Application Programs to be precise) that you use, including the desktop UI *is not a part of the operating system*.\n\n🧠 We will also write a **Wayland Compositor [The Wayland Compositor ](https://www.notion.so/The-Wayland-Compositor-d50267f916ae4592bfe9a3340e5472f1)** to allow for the custom features and behaviour we want to take place. It will be made using **Rust** and [**Smithay**](https://smithay.github.io/) to add additional Features to the Desktop Environment.\n"
        }
      ]
    }
  ];

  const Path = useRouter().asPath;

  type Question = {
    Title: string;
    SubTitle: string;
    Answer: string;
  };

  type CategoryType = {
    Name: String;
    Questions: Array<Question>;
  };

  return (
    <div id="faq">
      <Collapse.Group>
        {FAQList.map((Category: CategoryType, index: any) => (
          <div className="category" key={index}>
            <div className="categoryName">{Category.Name}</div>
            {Category.Questions.map((Question: Question, index: any) => (
              <Collapse
                className="questions"
                style={{ overflowWrap: 'anywhere' }}
                id={index}
                key={index}
                subtitle={Question.SubTitle}
                title={Question.Title}
                initialVisible={Path.endsWith(`#${index}`)}
              >
                <Text>
                  <ReactMarkdown>{Question.Answer}</ReactMarkdown>
                </Text>
              </Collapse>
            ))}
          </div>
        ))}
      </Collapse.Group>
    </div>
  );
};

export default FAQ;

