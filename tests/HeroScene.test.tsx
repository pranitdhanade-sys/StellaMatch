import { render, screen } from '@testing-library/react';
import { HeroScene } from '@/components/HeroScene';

jest.mock('@/components/HeroCanvas', () => ({
  HeroCanvas: () => <div data-testid="hero-canvas" />
}));

describe('HeroScene', () => {
  it('renders title and mentor copy', () => {
    render(<HeroScene />);
    expect(screen.getByText('StellaMatch')).toBeInTheDocument();
    expect(screen.getByText(/robotic cat-like mentor/i)).toBeInTheDocument();
    expect(screen.getByTestId('hero-canvas')).toBeInTheDocument();
  });
});
