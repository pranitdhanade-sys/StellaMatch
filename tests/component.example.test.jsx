import { render, screen } from '@testing-library/react';

function SampleCard() {
  return <div aria-label="sample">Sample Component</div>;
}

describe('component example', () => {
  it('renders sample component', () => {
    render(<SampleCard />);
    expect(screen.getByLabelText('sample')).toBeInTheDocument();
  });
});
