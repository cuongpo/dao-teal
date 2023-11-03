import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { DaoTealClient } from '../contracts/clients/DaoTealClient';

const fixture = algorandFixture();

let appClient: DaoTealClient;

describe('DaoTeal', () => {
  beforeEach(fixture.beforeEach);
  const proposal = 'This is a proposal.';
  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    appClient = new DaoTealClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({ proposal });
  });

  test('getProposal', async () => {
    const proposalFromMethod = await appClient.getProposal({});
    console.log(proposalFromMethod.return?.valueOf());
    expect(proposalFromMethod.return?.valueOf()).toBe(proposal);
  });

  test('vote & get vote', async () => {
    await appClient.vote({ inFavor: true });

    const votesAfter = await appClient.getVotes({});
    expect(votesAfter.return?.valueOf()).toEqual([BigInt(1), BigInt(1)]);

    await appClient.vote({ inFavor: false });

    const votesAfter2 = await appClient.getVotes({});
    expect(votesAfter2.return?.valueOf()).toEqual([BigInt(1), BigInt(2)]);
  });
});
