import { Button, Text, Spacer, useTheme } from '@geist-ui/core';
import NextLink from 'next/link';
import dynamicWidth from '@/lib/dynamic-width';
import { useState } from 'react';
import { TranslatableText } from '@/components/translation/TranslatableText';
import SlideshowExplainer from '@/components/slideshowExplainer';



// Creates small presentation of AvdanOS features called `miniFeatures()`
const MiniFeatures = () => {
    const theme = useTheme();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    // Determines if device is mobile (950 or less) or a PC //
    dynamicWidth((width) => {
        setIsSmallScreen(width <= 950 ? true : false);
    });



    // Returns its content
    return (
        <>
            <div className="center">
                <Text h1 className="text-center">
                    <TranslatableText>Workflow redefined</TranslatableText>
                </Text>

                <Text p className="text-center" style={{ fontSize: '1.2rem', padding: '0 30px' }}>
                    <TranslatableText>
                        Time is priceless, and there is so little time.
                        With right tools and professional workspace, 
                        every task is simple as pie for the least amount of time!
                    </TranslatableText>
                </Text>

                <Spacer h="15px"/>
                <SlideshowExplainer />
                
                <Spacer h="15px"/>
                <div className="text-center">
                    <Text p className="text-center" style={{ fontSize: '1.2rem' }}>
                        <TranslatableText>Check what AvdanOS offers to you.</TranslatableText>
                    </Text>

                    <NextLink href="/features-beta" >
                        <Button shadow type="success" color="primary">
                            <TranslatableText>See here</TranslatableText>
                        </Button>
                    </NextLink>
                </div>
            </div>
            
        </>
    );
};

export default MiniFeatures;