/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createApplication(string)void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "vote(bool)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getProposal()string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getVotes()(uint64,uint64)": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "proposal": {
          "type": "bytes",
          "key": "proposal"
        },
        "votesTotal": {
          "type": "uint64",
          "key": "votesTotal"
        },
        "votesInFavor": {
          "type": "uint64",
          "key": "votesInFavor"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 2
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNTkuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGNyZWF0ZUFwcGxpY2F0aW9uKHN0cmluZyl2b2lkCi8vCi8vIC8vIGRlZmluZSBhIHByb3Bvc2FsCmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCS8vIHByb3Bvc2FsOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbihzdHJpbmcpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKY3JlYXRlQXBwbGljYXRpb246Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLXRlYWwuYWxnby50czoxMwoJLy8gdGhpcy5wcm9wb3NhbC52YWx1ZSA9IHByb3Bvc2FsCglieXRlIDB4NzA3MjZmNzA2ZjczNjE2YyAvLyAicHJvcG9zYWwiCglmcmFtZV9kaWcgLTEgLy8gcHJvcG9zYWw6IGJ5dGVzCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gdm90ZShib29sKXZvaWQKYWJpX3JvdXRlX3ZvdGU6CgkvLyBpbkZhdm9yOiBib29sCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglkdXAKCWxlbgoJaW50IDEKCT09Cglhc3NlcnQKCWludCAwCglnZXRiaXQKCgkvLyBleGVjdXRlIHZvdGUoYm9vbCl2b2lkCgljYWxsc3ViIHZvdGUKCWludCAxCglyZXR1cm4KCnZvdGU6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLXRlYWwuYWxnby50czoxNwoJLy8gdGhpcy52b3Rlc1RvdGFsLnZhbHVlID0gdGhpcy52b3Rlc1RvdGFsLnZhbHVlICsgMQoJYnl0ZSAweDc2NmY3NDY1NzM1NDZmNzQ2MTZjIC8vICJ2b3Rlc1RvdGFsIgoJYnl0ZSAweDc2NmY3NDY1NzM1NDZmNzQ2MTZjIC8vICJ2b3Rlc1RvdGFsIgoJYXBwX2dsb2JhbF9nZXQKCWludCAxCgkrCglhcHBfZ2xvYmFsX3B1dAoKCS8vIGlmMF9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy9kYW8tdGVhbC5hbGdvLnRzOjE4CgkvLyBpbkZhdm9yCglmcmFtZV9kaWcgLTEgLy8gaW5GYXZvcjogYm9vbAoJYnogaWYwX2VuZAoKCS8vIGlmMF9jb25zZXF1ZW50CgkvLyBjb250cmFjdHMvZGFvLXRlYWwuYWxnby50czoxOQoJLy8gdGhpcy52b3Rlc0luRmF2b3IudmFsdWUgPSB0aGlzLnZvdGVzSW5GYXZvci52YWx1ZSArIDEKCWJ5dGUgMHg3NjZmNzQ2NTczNDk2ZTQ2NjE3NjZmNzIgLy8gInZvdGVzSW5GYXZvciIKCWJ5dGUgMHg3NjZmNzQ2NTczNDk2ZTQ2NjE3NjZmNzIgLy8gInZvdGVzSW5GYXZvciIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgMQoJKwoJYXBwX2dsb2JhbF9wdXQKCmlmMF9lbmQ6CglyZXRzdWIKCi8vIGdldFByb3Bvc2FsKClzdHJpbmcKLy8KLy8gLy8gbWFrZSBpcyBlYXN5IGZvciB2b3RlcnMgdG8gc2VlIHdoYXQgdGhlIHByb3Bvc2FsIGlzCmFiaV9yb3V0ZV9nZXRQcm9wb3NhbDoKCS8vIGV4ZWN1dGUgZ2V0UHJvcG9zYWwoKXN0cmluZwoJY2FsbHN1YiBnZXRQcm9wb3NhbAoJaW50IDEKCXJldHVybgoKZ2V0UHJvcG9zYWw6Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvZGFvLXRlYWwuYWxnby50czoyNQoJLy8gcmV0dXJuIHRoaXMucHJvcG9zYWwudmFsdWU7CglieXRlIDB4NzA3MjZmNzA2ZjczNjE2YyAvLyAicHJvcG9zYWwiCglhcHBfZ2xvYmFsX2dldAoJZXh0cmFjdCAyIDAKCWR1cAoJbGVuCglpdG9iCglleHRyYWN0IDYgMgoJc3dhcAoJY29uY2F0CglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCi8vIGdldFZvdGVzKCkodWludDY0LHVpbnQ2NCkKYWJpX3JvdXRlX2dldFZvdGVzOgoJLy8gZXhlY3V0ZSBnZXRWb3RlcygpKHVpbnQ2NCx1aW50NjQpCgljYWxsc3ViIGdldFZvdGVzCglpbnQgMQoJcmV0dXJuCgpnZXRWb3RlczoKCXByb3RvIDAgMAoKCS8vIGNvbnRyYWN0cy9kYW8tdGVhbC5hbGdvLnRzOjI5CgkvLyByZXR1cm4gW3RoaXMudm90ZXNJbkZhdm9yLnZhbHVlLCB0aGlzLnZvdGVzVG90YWwudmFsdWVdOwoJYnl0ZSAweDc2NmY3NDY1NzM0OTZlNDY2MTc2NmY3MiAvLyAidm90ZXNJbkZhdm9yIgoJYXBwX2dsb2JhbF9nZXQKCWl0b2IKCWJ5dGUgMHg3NjZmNzQ2NTczNTQ2Zjc0NjE2YyAvLyAidm90ZXNUb3RhbCIKCWFwcF9nbG9iYWxfZ2V0CglpdG9iCgljb25jYXQKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKHN0cmluZyl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgllcnIKCmNhbGxfTm9PcDoKCW1ldGhvZCAidm90ZShib29sKXZvaWQiCgltZXRob2QgImdldFByb3Bvc2FsKClzdHJpbmciCgltZXRob2QgImdldFZvdGVzKCkodWludDY0LHVpbnQ2NCkiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfdm90ZSBhYmlfcm91dGVfZ2V0UHJvcG9zYWwgYWJpX3JvdXRlX2dldFZvdGVzCgllcnI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "DaoTeal",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [
          {
            "name": "proposal",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "vote",
        "args": [
          {
            "name": "inFavor",
            "type": "bool",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "getProposal",
        "args": [],
        "desc": "",
        "returns": {
          "type": "string",
          "desc": ""
        }
      },
      {
        "name": "getVotes",
        "args": [],
        "desc": "",
        "returns": {
          "type": "(uint64,uint64)",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the DaoTeal smart contract.
 */
export type DaoTeal = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createApplication(string)void' | 'createApplication', {
      argsObj: {
        proposal: string
      }
      argsTuple: [proposal: string]
      returns: void
    }>
    & Record<'vote(bool)void' | 'vote', {
      argsObj: {
        inFavor: boolean
      }
      argsTuple: [inFavor: boolean]
      returns: void
    }>
    & Record<'getProposal()string' | 'getProposal', {
      argsObj: {
      }
      argsTuple: []
      returns: string
    }>
    & Record<'getVotes()(uint64,uint64)' | 'getVotes', {
      argsObj: {
      }
      argsTuple: []
      returns: [bigint, bigint]
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'proposal'?: BinaryState
      'votesTotal'?: IntegerState
      'votesInFavor'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type DaoTealSig = keyof DaoTeal['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends DaoTealSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the DaoTeal smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends DaoTealSig> = DaoTeal['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the DaoTeal smart contract to the method's return type
 */
export type MethodReturn<TSignature extends DaoTealSig> = DaoTeal['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type DaoTealCreateCalls = (typeof DaoTealCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type DaoTealCreateCallParams =
  | (TypedCallParams<'createApplication(string)void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type DaoTealDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: DaoTealCreateCalls) => DaoTealCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class DaoTealCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the DaoTeal smart contract using the createApplication(string)void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication(string)void' as const,
          methodArgs: Array.isArray(args) ? args : [args.proposal],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the vote(bool)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static vote(args: MethodArgs<'vote(bool)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'vote(bool)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.inFavor],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getProposal()string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getProposal(args: MethodArgs<'getProposal()string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getProposal()string' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getVotes()(uint64,uint64) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getVotes()(uint64,uint64)' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the DaoTeal smart contract
 */
export class DaoTealClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `DaoTealClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof DaoTeal['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the DaoTeal smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: DaoTealDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(DaoTealCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the DaoTeal smart contract using the createApplication(string)void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication(string)void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication(string)void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(DaoTealCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the DaoTeal smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the vote(bool)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public vote(args: MethodArgs<'vote(bool)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoTealCallFactory.vote(args, params))
  }

  /**
   * Calls the getProposal()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getProposal(args: MethodArgs<'getProposal()string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoTealCallFactory.getProposal(args, params))
  }

  /**
   * Calls the getVotes()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoTealCallFactory.getVotes(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<DaoTeal['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get proposal() {
        return DaoTealClient.getBinaryState(state, 'proposal')
      },
      get votesTotal() {
        return DaoTealClient.getIntegerState(state, 'votesTotal')
      },
      get votesInFavor() {
        return DaoTealClient.getIntegerState(state, 'votesInFavor')
      },
    }
  }

  public compose(): DaoTealComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      vote(args: MethodArgs<'vote(bool)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.vote(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getProposal(args: MethodArgs<'getProposal()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getProposal(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getVotes(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as DaoTealComposer
  }
}
export type DaoTealComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the vote(bool)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  vote(args: MethodArgs<'vote(bool)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoTealComposer<[...TReturns, MethodReturn<'vote(bool)void'>]>

  /**
   * Calls the getProposal()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getProposal(args: MethodArgs<'getProposal()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoTealComposer<[...TReturns, MethodReturn<'getProposal()string'>]>

  /**
   * Calls the getVotes()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoTealComposer<[...TReturns, MethodReturn<'getVotes()(uint64,uint64)'>]>

  /**
   * Makes a clear_state call to an existing instance of the DaoTeal smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): DaoTealComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): DaoTealComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<DaoTealComposerResults<TReturns>>
}
export type DaoTealComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
