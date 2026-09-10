import { Modal, useModal, Button } from '@geist-ui/core';
import { useEffect } from 'react';
import dynamicWidth from '@/lib/dynamic-width';
import { Chiislate } from './translation/Chiislate';

const WidthRequirement = ({ width, redirect }: { width: number; redirect?: string | null }) => {
  const { setVisible, bindings } = useModal();

  dynamicWidth((updatedWidth) => {
    if (updatedWidth > width) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const closeHandler = () => {
    if (redirect) {
      window.location.replace(redirect);
    } else {
      setVisible(false);
    }
  };

  return (
    <Modal {...bindings}>
      <Modal.Title><Chiislate>Display recommendation</Chiislate></Modal.Title>
      <Modal.Subtitle><Chiislate>Expanded viewport suggested</Chiislate></Modal.Subtitle>
      <Modal.Content>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
          <Chiislate>
            The AvdanOS interface prototype is designed for desktop proportions. Rotate your device to landscape or expand your browser window for the intended experience.
          </Chiislate>
        </p>
      </Modal.Content>
      <Modal.Action onClick={closeHandler}>
        <Chiislate>Continue anyway</Chiislate>
      </Modal.Action>
    </Modal>
  );
};

export default WidthRequirement;