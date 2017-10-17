import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  // setup
  beforeEach(() => {
    component = new VoteComponent();
  });
  // tear down
  afterEach(() => {});

  it('should increment totalVotes when upvoted', () => {
    // Arrange
    // const component = new VoteComponent();
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Arrange
    // const component = new VoteComponent();
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
