import { render, screen } from '@testing-library/react';
import { HeroScene } from '@/components/HeroScene';

describe('HeroScene', () => {
  it('renders title and mentor copy', () => {
    render(<HeroScene />);
    expect(screen.getByText('Stella Match')).toBeInTheDocument();
    expect(screen.getByText(/robotic cat-like mentor/i)).toBeInTheDocument();
  });
});
