import React, { useState } from 'react';
import { Collapse, Text } from '@geist-ui/core';
import YAML from 'yaml';
import { useRouter } from 'next/router';

const FAQ = ({ YamlData }) => {

    const Path = useRouter().asPath

    type Question = {
        Title: string,
        SubTitle: string,
        Answer: string,
    }

    return (
        <div id='faq'>
            <Collapse.Group>
                {YamlData.Questions.map((Question: Question, index: any) => (
                    <Collapse className='Questions' style={{ overflowWrap: "anywhere" }} id={index} key={index} subtitle={Question.SubTitle} title={Question.Title} initialVisible={Path.endsWith(`#${index}`)}>
                        <Text>
                            {Question.Answer}
                        </Text>
                    </Collapse>
                ))
                }
            </Collapse.Group>
        </div>
    );
};

export async function getStaticProps() {
    const YamlData = await YAML.parse(await (await fetch('http://localhost:3000/assets/FAQ.yaml')).text())
    return {
        props: {
            YamlData,
        },
    }
}

export default FAQ;
