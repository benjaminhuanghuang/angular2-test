import { VoteComponent } from "./vote.component"

describe("getCurrencies testing", () => {
    let component : VoteComponent;

    beforeEach(()=>{
        component = new VoteComponent();
    });
    afterEach(()=>{
        component = null;
    });
    beforeAll(()=>{});
    afterAll(()=>{});
    

    it("should increment totalVotes when upvoted", () => {
        component.upVote();
        export(component.totalVotes).toBe(1);
    })
});  // suit
