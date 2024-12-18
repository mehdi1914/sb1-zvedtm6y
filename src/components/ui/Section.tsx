import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export default function Section({ 
  children, 
  className,
  containerClassName,
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-24",
        "before:absolute before:inset-0 before:bg-black/40 before:backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}