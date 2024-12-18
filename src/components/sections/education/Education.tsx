import React from 'react';
import Section from '../../ui/Section';
import Container from '../../ui/Container';
import Diplomas from './Diplomas';
import Certificates from './Certificates';

export default function Education() {
  return (
    <Section className="bg-gray-900" id="education">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certificates</h2>
            <p className="text-lg text-gray-400">My academic journey and professional certifications</p>
          </div>
          
          <Diplomas />
          <Certificates />
        </div>
      </Container>
    </Section>
  );
}