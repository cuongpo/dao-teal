import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class DaoTeal extends Contract {
  proposal = GlobalStateKey<string>();

  votesTotal = GlobalStateKey<number>();

  votesInFavor = GlobalStateKey<number>();

  // define a proposal
  createApplication(proposal: string): void {
    this.proposal.value = proposal;
  }

  vote(inFavor: boolean): void {
    this.votesTotal.value = this.votesTotal.value + 1;
    if (inFavor) {
      this.votesInFavor.value = this.votesInFavor.value + 1;
    }
  }

  // make is easy for voters to see what the proposal is
  getProposal(): string {
    return this.proposal.value;
  }

  getVotes(): [number, number] {
    return [this.votesInFavor.value, this.votesTotal.value];
  }
}
