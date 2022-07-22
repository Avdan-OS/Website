import { Collapse, Text } from '@geist-ui/core';
import YAML from 'yaml';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const FAQ = ({ YamlData }) => {
  const Path = useRouter().asPath;

  type Question = {
    Title: string;
    SubTitle: string;
    Answer: string;
    QuestionNumber: any;
  };

  type CategoryType = {
    Name: String;
    Questions: Array<Question>;
  };

  return (
    <div id="faq">
      <Collapse.Group>
        {YamlData.FAQs.map((Category: CategoryType, index: any) => (
          <div className="Category" key={index}>
            <div className="CategoryName">{Category.Name}</div>
            {Category.Questions.map((Question: Question) => (
              <Collapse
                className="Questions"
                style={{ overflowWrap: 'anywhere' }}
                id={Question.QuestionNumber}
                key={Question.QuestionNumber}
                subtitle={Question.SubTitle}
                title={Question.Title}
                initialVisible={Path.endsWith(`#${Question.QuestionNumber}`)}
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

export async function getStaticProps() {
  const YamlData = await YAML.parse(await (await fetch('http://localhost:3000/assets/FAQ.yaml')).text());
  return {
    props: {
      YamlData
    }
  };
}

export default FAQ;
