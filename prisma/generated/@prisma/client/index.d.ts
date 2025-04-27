
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Airline
 * 
 */
export type Airline = $Result.DefaultSelection<Prisma.$AirlinePayload>
/**
 * Model Airplane
 * 
 */
export type Airplane = $Result.DefaultSelection<Prisma.$AirplanePayload>
/**
 * Model Airport
 * 
 */
export type Airport = $Result.DefaultSelection<Prisma.$AirportPayload>
/**
 * Model Flight
 * 
 */
export type Flight = $Result.DefaultSelection<Prisma.$FlightPayload>
/**
 * Model Passenger
 * 
 */
export type Passenger = $Result.DefaultSelection<Prisma.$PassengerPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FlightStatus: {
  Cancelled: 'Cancelled',
  Confirmed: 'Confirmed',
  Pending: 'Pending',
  CheckedIn: 'CheckedIn',
  Boarded: 'Boarded',
  Delayed: 'Delayed',
  InFlight: 'InFlight',
  Arrived: 'Arrived',
  Departed: 'Departed',
  Scheduled: 'Scheduled'
};

export type FlightStatus = (typeof FlightStatus)[keyof typeof FlightStatus]


export const BookingStatus: {
  Confirmed: 'Confirmed',
  Cancelled: 'Cancelled',
  Pending: 'Pending',
  CheckedIn: 'CheckedIn',
  NoShow: 'NoShow'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PassengerClass: {
  Economy: 'Economy',
  Business: 'Business',
  First: 'First'
};

export type PassengerClass = (typeof PassengerClass)[keyof typeof PassengerClass]

}

export type FlightStatus = $Enums.FlightStatus

export const FlightStatus: typeof $Enums.FlightStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PassengerClass = $Enums.PassengerClass

export const PassengerClass: typeof $Enums.PassengerClass

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airline`: Exposes CRUD operations for the **Airline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airlines
    * const airlines = await prisma.airline.findMany()
    * ```
    */
  get airline(): Prisma.AirlineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airplane`: Exposes CRUD operations for the **Airplane** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airplanes
    * const airplanes = await prisma.airplane.findMany()
    * ```
    */
  get airplane(): Prisma.AirplaneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airport`: Exposes CRUD operations for the **Airport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airport.findMany()
    * ```
    */
  get airport(): Prisma.AirportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flight`: Exposes CRUD operations for the **Flight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flight.findMany()
    * ```
    */
  get flight(): Prisma.FlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passenger`: Exposes CRUD operations for the **Passenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passengers
    * const passengers = await prisma.passenger.findMany()
    * ```
    */
  get passenger(): Prisma.PassengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Country: 'Country',
    State: 'State',
    City: 'City',
    Airline: 'Airline',
    Airplane: 'Airplane',
    Airport: 'Airport',
    Flight: 'Flight',
    Passenger: 'Passenger',
    Booking: 'Booking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "country" | "state" | "city" | "airline" | "airplane" | "airport" | "flight" | "passenger" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Airline: {
        payload: Prisma.$AirlinePayload<ExtArgs>
        fields: Prisma.AirlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findFirst: {
            args: Prisma.AirlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findMany: {
            args: Prisma.AirlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          create: {
            args: Prisma.AirlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          createMany: {
            args: Prisma.AirlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AirlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          update: {
            args: Prisma.AirlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          deleteMany: {
            args: Prisma.AirlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          aggregate: {
            args: Prisma.AirlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirline>
          }
          groupBy: {
            args: Prisma.AirlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirlineCountArgs<ExtArgs>
            result: $Utils.Optional<AirlineCountAggregateOutputType> | number
          }
        }
      }
      Airplane: {
        payload: Prisma.$AirplanePayload<ExtArgs>
        fields: Prisma.AirplaneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirplaneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirplaneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          findFirst: {
            args: Prisma.AirplaneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirplaneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          findMany: {
            args: Prisma.AirplaneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>[]
          }
          create: {
            args: Prisma.AirplaneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          createMany: {
            args: Prisma.AirplaneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AirplaneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          update: {
            args: Prisma.AirplaneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          deleteMany: {
            args: Prisma.AirplaneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirplaneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirplaneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirplanePayload>
          }
          aggregate: {
            args: Prisma.AirplaneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirplane>
          }
          groupBy: {
            args: Prisma.AirplaneGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirplaneGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirplaneCountArgs<ExtArgs>
            result: $Utils.Optional<AirplaneCountAggregateOutputType> | number
          }
        }
      }
      Airport: {
        payload: Prisma.$AirportPayload<ExtArgs>
        fields: Prisma.AirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findFirst: {
            args: Prisma.AirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findMany: {
            args: Prisma.AirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          create: {
            args: Prisma.AirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          createMany: {
            args: Prisma.AirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          update: {
            args: Prisma.AirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          deleteMany: {
            args: Prisma.AirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          aggregate: {
            args: Prisma.AirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirport>
          }
          groupBy: {
            args: Prisma.AirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirportCountAggregateOutputType> | number
          }
        }
      }
      Flight: {
        payload: Prisma.$FlightPayload<ExtArgs>
        fields: Prisma.FlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findFirst: {
            args: Prisma.FlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findMany: {
            args: Prisma.FlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          create: {
            args: Prisma.FlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          createMany: {
            args: Prisma.FlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          update: {
            args: Prisma.FlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          deleteMany: {
            args: Prisma.FlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          aggregate: {
            args: Prisma.FlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlight>
          }
          groupBy: {
            args: Prisma.FlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightCountArgs<ExtArgs>
            result: $Utils.Optional<FlightCountAggregateOutputType> | number
          }
        }
      }
      Passenger: {
        payload: Prisma.$PassengerPayload<ExtArgs>
        fields: Prisma.PassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findFirst: {
            args: Prisma.PassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findMany: {
            args: Prisma.PassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          create: {
            args: Prisma.PassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          createMany: {
            args: Prisma.PassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          update: {
            args: Prisma.PassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          deleteMany: {
            args: Prisma.PassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          aggregate: {
            args: Prisma.PassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassenger>
          }
          groupBy: {
            args: Prisma.PassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassengerCountArgs<ExtArgs>
            result: $Utils.Optional<PassengerCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    country?: CountryOmit
    state?: StateOmit
    city?: CityOmit
    airline?: AirlineOmit
    airplane?: AirplaneOmit
    airport?: AirportOmit
    flight?: FlightOmit
    passenger?: PassengerOmit
    booking?: BookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    airlines: number
    airports: number
    cities: number
    State: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | CountryCountOutputTypeCountAirlinesArgs
    airports?: boolean | CountryCountOutputTypeCountAirportsArgs
    cities?: boolean | CountryCountOutputTypeCountCitiesArgs
    State?: boolean | CountryCountOutputTypeCountStateArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountAirlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    cities: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | StateCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    airports: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airports?: boolean | CityCountOutputTypeCountAirportsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
  }


  /**
   * Count Type AirlineCountOutputType
   */

  export type AirlineCountOutputType = {
    planes: number
    flights: number
  }

  export type AirlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planes?: boolean | AirlineCountOutputTypeCountPlanesArgs
    flights?: boolean | AirlineCountOutputTypeCountFlightsArgs
  }

  // Custom InputTypes
  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineCountOutputType
     */
    select?: AirlineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountPlanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirplaneWhereInput
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type AirplaneCountOutputType
   */

  export type AirplaneCountOutputType = {
    flights: number
  }

  export type AirplaneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | AirplaneCountOutputTypeCountFlightsArgs
  }

  // Custom InputTypes
  /**
   * AirplaneCountOutputType without action
   */
  export type AirplaneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirplaneCountOutputType
     */
    select?: AirplaneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirplaneCountOutputType without action
   */
  export type AirplaneCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type AirportCountOutputType
   */

  export type AirportCountOutputType = {
    departures: number
    arrivals: number
  }

  export type AirportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departures?: boolean | AirportCountOutputTypeCountDeparturesArgs
    arrivals?: boolean | AirportCountOutputTypeCountArrivalsArgs
  }

  // Custom InputTypes
  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportCountOutputType
     */
    select?: AirportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountDeparturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountArrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type FlightCountOutputType
   */

  export type FlightCountOutputType = {
    bookings: number
  }

  export type FlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | FlightCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightCountOutputType
     */
    select?: FlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type PassengerCountOutputType
   */

  export type PassengerCountOutputType = {
    bookings: number
  }

  export type PassengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PassengerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerCountOutputType
     */
    select?: PassengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    countryCode: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    countryCode: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    countryCode: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    countryCode?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    countryCode: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryCode?: boolean
    airlines?: boolean | Country$airlinesArgs<ExtArgs>
    airports?: boolean | Country$airportsArgs<ExtArgs>
    cities?: boolean | Country$citiesArgs<ExtArgs>
    State?: boolean | Country$StateArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>



  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    countryCode?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryCode", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlines?: boolean | Country$airlinesArgs<ExtArgs>
    airports?: boolean | Country$airportsArgs<ExtArgs>
    cities?: boolean | Country$citiesArgs<ExtArgs>
    State?: boolean | Country$StateArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      airlines: Prisma.$AirlinePayload<ExtArgs>[]
      airports: Prisma.$AirportPayload<ExtArgs>[]
      cities: Prisma.$CityPayload<ExtArgs>[]
      State: Prisma.$StatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      countryCode: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airlines<T extends Country$airlinesArgs<ExtArgs> = {}>(args?: Subset<T, Country$airlinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    airports<T extends Country$airportsArgs<ExtArgs> = {}>(args?: Subset<T, Country$airportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cities<T extends Country$citiesArgs<ExtArgs> = {}>(args?: Subset<T, Country$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    State<T extends Country$StateArgs<ExtArgs> = {}>(args?: Subset<T, Country$StateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly countryCode: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.airlines
   */
  export type Country$airlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    where?: AirlineWhereInput
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    cursor?: AirlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Country.airports
   */
  export type Country$airportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    cursor?: AirportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Country.cities
   */
  export type Country$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Country.State
   */
  export type Country$StateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    cursor?: StateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateMinAggregateOutputType = {
    id: string | null
    name: string | null
    stateCode: string | null
    countryId: string | null
  }

  export type StateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stateCode: string | null
    countryId: string | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    name: number
    stateCode: number
    countryId: number
    _all: number
  }


  export type StateMinAggregateInputType = {
    id?: true
    name?: true
    stateCode?: true
    countryId?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    name?: true
    stateCode?: true
    countryId?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    name?: true
    stateCode?: true
    countryId?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: string
    name: string
    stateCode: string | null
    countryId: string
    _count: StateCountAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateCode?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cities?: boolean | State$citiesArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>



  export type StateSelectScalar = {
    id?: boolean
    name?: boolean
    stateCode?: boolean
    countryId?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateCode" | "countryId", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cities?: boolean | State$citiesArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      cities: Prisma.$CityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stateCode: string | null
      countryId: string
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cities<T extends State$citiesArgs<ExtArgs> = {}>(args?: Subset<T, State$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'String'>
    readonly name: FieldRef<"State", 'String'>
    readonly stateCode: FieldRef<"State", 'String'>
    readonly countryId: FieldRef<"State", 'String'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.cities
   */
  export type State$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    cityIATACode: string | null
    stateId: string | null
    countryId: string | null
    stateCountryKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cityIATACode: string | null
    stateId: string | null
    countryId: string | null
    stateCountryKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    cityIATACode: number
    stateId: number
    countryId: number
    stateCountryKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    cityIATACode?: true
    stateId?: true
    countryId?: true
    stateCountryKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    cityIATACode?: true
    stateId?: true
    countryId?: true
    stateCountryKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    cityIATACode?: true
    stateId?: true
    countryId?: true
    stateCountryKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    cityIATACode: string
    stateId: string | null
    countryId: string
    stateCountryKey: string
    createdAt: Date
    updatedAt: Date
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityIATACode?: boolean
    stateId?: boolean
    countryId?: boolean
    stateCountryKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    state?: boolean | City$stateArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    airports?: boolean | City$airportsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>



  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    cityIATACode?: boolean
    stateId?: boolean
    countryId?: boolean
    stateCountryKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cityIATACode" | "stateId" | "countryId" | "stateCountryKey" | "createdAt" | "updatedAt", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | City$stateArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    airports?: boolean | City$airportsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      state: Prisma.$StatePayload<ExtArgs> | null
      country: Prisma.$CountryPayload<ExtArgs>
      airports: Prisma.$AirportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cityIATACode: string
      stateId: string | null
      countryId: string
      stateCountryKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends City$stateArgs<ExtArgs> = {}>(args?: Subset<T, City$stateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    airports<T extends City$airportsArgs<ExtArgs> = {}>(args?: Subset<T, City$airportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly cityIATACode: FieldRef<"City", 'String'>
    readonly stateId: FieldRef<"City", 'String'>
    readonly countryId: FieldRef<"City", 'String'>
    readonly stateCountryKey: FieldRef<"City", 'String'>
    readonly createdAt: FieldRef<"City", 'DateTime'>
    readonly updatedAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.state
   */
  export type City$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
  }

  /**
   * City.airports
   */
  export type City$airportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    cursor?: AirportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Airline
   */

  export type AggregateAirline = {
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  export type AirlineMinAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirlineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirlineCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    logo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AirlineMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirlineMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirlineCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AirlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airline to aggregate.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airlines
    **/
    _count?: true | AirlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlineMaxAggregateInputType
  }

  export type GetAirlineAggregateType<T extends AirlineAggregateArgs> = {
        [P in keyof T & keyof AggregateAirline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirline[P]>
      : GetScalarType<T[P], AggregateAirline[P]>
  }




  export type AirlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineWhereInput
    orderBy?: AirlineOrderByWithAggregationInput | AirlineOrderByWithAggregationInput[]
    by: AirlineScalarFieldEnum[] | AirlineScalarFieldEnum
    having?: AirlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlineCountAggregateInputType | true
    _min?: AirlineMinAggregateInputType
    _max?: AirlineMaxAggregateInputType
  }

  export type AirlineGroupByOutputType = {
    id: string
    name: string
    countryId: string
    logo: string
    createdAt: Date
    updatedAt: Date
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  type GetAirlineGroupByPayload<T extends AirlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlineGroupByOutputType[P]>
            : GetScalarType<T[P], AirlineGroupByOutputType[P]>
        }
      >
    >


  export type AirlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    planes?: boolean | Airline$planesArgs<ExtArgs>
    flights?: boolean | Airline$flightsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airline"]>



  export type AirlineSelectScalar = {
    id?: boolean
    name?: boolean
    countryId?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AirlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "countryId" | "logo" | "createdAt" | "updatedAt", ExtArgs["result"]["airline"]>
  export type AirlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    planes?: boolean | Airline$planesArgs<ExtArgs>
    flights?: boolean | Airline$flightsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AirlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airline"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      planes: Prisma.$AirplanePayload<ExtArgs>[]
      flights: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      countryId: string
      logo: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["airline"]>
    composites: {}
  }

  type AirlineGetPayload<S extends boolean | null | undefined | AirlineDefaultArgs> = $Result.GetResult<Prisma.$AirlinePayload, S>

  type AirlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirlineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirlineCountAggregateInputType | true
    }

  export interface AirlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airline'], meta: { name: 'Airline' } }
    /**
     * Find zero or one Airline that matches the filter.
     * @param {AirlineFindUniqueArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirlineFindUniqueArgs>(args: SelectSubset<T, AirlineFindUniqueArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirlineFindUniqueOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirlineFindUniqueOrThrowArgs>(args: SelectSubset<T, AirlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirlineFindFirstArgs>(args?: SelectSubset<T, AirlineFindFirstArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirlineFindFirstOrThrowArgs>(args?: SelectSubset<T, AirlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airlines
     * const airlines = await prisma.airline.findMany()
     * 
     * // Get first 10 Airlines
     * const airlines = await prisma.airline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airlineWithIdOnly = await prisma.airline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirlineFindManyArgs>(args?: SelectSubset<T, AirlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airline.
     * @param {AirlineCreateArgs} args - Arguments to create a Airline.
     * @example
     * // Create one Airline
     * const Airline = await prisma.airline.create({
     *   data: {
     *     // ... data to create a Airline
     *   }
     * })
     * 
     */
    create<T extends AirlineCreateArgs>(args: SelectSubset<T, AirlineCreateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airlines.
     * @param {AirlineCreateManyArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airline = await prisma.airline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirlineCreateManyArgs>(args?: SelectSubset<T, AirlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Airline.
     * @param {AirlineDeleteArgs} args - Arguments to delete one Airline.
     * @example
     * // Delete one Airline
     * const Airline = await prisma.airline.delete({
     *   where: {
     *     // ... filter to delete one Airline
     *   }
     * })
     * 
     */
    delete<T extends AirlineDeleteArgs>(args: SelectSubset<T, AirlineDeleteArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airline.
     * @param {AirlineUpdateArgs} args - Arguments to update one Airline.
     * @example
     * // Update one Airline
     * const airline = await prisma.airline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirlineUpdateArgs>(args: SelectSubset<T, AirlineUpdateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airlines.
     * @param {AirlineDeleteManyArgs} args - Arguments to filter Airlines to delete.
     * @example
     * // Delete a few Airlines
     * const { count } = await prisma.airline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirlineDeleteManyArgs>(args?: SelectSubset<T, AirlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airlines
     * const airline = await prisma.airline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirlineUpdateManyArgs>(args: SelectSubset<T, AirlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airline.
     * @param {AirlineUpsertArgs} args - Arguments to update or create a Airline.
     * @example
     * // Update or create a Airline
     * const airline = await prisma.airline.upsert({
     *   create: {
     *     // ... data to create a Airline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airline we want to update
     *   }
     * })
     */
    upsert<T extends AirlineUpsertArgs>(args: SelectSubset<T, AirlineUpsertArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineCountArgs} args - Arguments to filter Airlines to count.
     * @example
     * // Count the number of Airlines
     * const count = await prisma.airline.count({
     *   where: {
     *     // ... the filter for the Airlines we want to count
     *   }
     * })
    **/
    count<T extends AirlineCountArgs>(
      args?: Subset<T, AirlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirlineAggregateArgs>(args: Subset<T, AirlineAggregateArgs>): Prisma.PrismaPromise<GetAirlineAggregateType<T>>

    /**
     * Group by Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirlineGroupByArgs['orderBy'] }
        : { orderBy?: AirlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airline model
   */
  readonly fields: AirlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    planes<T extends Airline$planesArgs<ExtArgs> = {}>(args?: Subset<T, Airline$planesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flights<T extends Airline$flightsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airline model
   */
  interface AirlineFieldRefs {
    readonly id: FieldRef<"Airline", 'String'>
    readonly name: FieldRef<"Airline", 'String'>
    readonly countryId: FieldRef<"Airline", 'String'>
    readonly logo: FieldRef<"Airline", 'String'>
    readonly createdAt: FieldRef<"Airline", 'DateTime'>
    readonly updatedAt: FieldRef<"Airline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Airline findUnique
   */
  export type AirlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findUniqueOrThrow
   */
  export type AirlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findFirst
   */
  export type AirlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findFirstOrThrow
   */
  export type AirlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findMany
   */
  export type AirlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airlines to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline create
   */
  export type AirlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to create a Airline.
     */
    data: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
  }

  /**
   * Airline createMany
   */
  export type AirlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airlines.
     */
    data: AirlineCreateManyInput | AirlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airline update
   */
  export type AirlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to update a Airline.
     */
    data: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
    /**
     * Choose, which Airline to update.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline updateMany
   */
  export type AirlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airlines.
     */
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyInput>
    /**
     * Filter which Airlines to update
     */
    where?: AirlineWhereInput
    /**
     * Limit how many Airlines to update.
     */
    limit?: number
  }

  /**
   * Airline upsert
   */
  export type AirlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The filter to search for the Airline to update in case it exists.
     */
    where: AirlineWhereUniqueInput
    /**
     * In case the Airline found by the `where` argument doesn't exist, create a new Airline with this data.
     */
    create: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
    /**
     * In case the Airline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
  }

  /**
   * Airline delete
   */
  export type AirlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter which Airline to delete.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline deleteMany
   */
  export type AirlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airlines to delete
     */
    where?: AirlineWhereInput
    /**
     * Limit how many Airlines to delete.
     */
    limit?: number
  }

  /**
   * Airline.planes
   */
  export type Airline$planesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    where?: AirplaneWhereInput
    orderBy?: AirplaneOrderByWithRelationInput | AirplaneOrderByWithRelationInput[]
    cursor?: AirplaneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirplaneScalarFieldEnum | AirplaneScalarFieldEnum[]
  }

  /**
   * Airline.flights
   */
  export type Airline$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airline without action
   */
  export type AirlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
  }


  /**
   * Model Airplane
   */

  export type AggregateAirplane = {
    _count: AirplaneCountAggregateOutputType | null
    _avg: AirplaneAvgAggregateOutputType | null
    _sum: AirplaneSumAggregateOutputType | null
    _min: AirplaneMinAggregateOutputType | null
    _max: AirplaneMaxAggregateOutputType | null
  }

  export type AirplaneAvgAggregateOutputType = {
    year: number | null
    seats: number | null
    capacity: number | null
  }

  export type AirplaneSumAggregateOutputType = {
    year: number | null
    seats: number | null
    capacity: number | null
  }

  export type AirplaneMinAggregateOutputType = {
    id: string | null
    model: string | null
    year: number | null
    seats: number | null
    capacity: number | null
    manufacturer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    airlineId: string | null
  }

  export type AirplaneMaxAggregateOutputType = {
    id: string | null
    model: string | null
    year: number | null
    seats: number | null
    capacity: number | null
    manufacturer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    airlineId: string | null
  }

  export type AirplaneCountAggregateOutputType = {
    id: number
    model: number
    year: number
    seats: number
    capacity: number
    manufacturer: number
    createdAt: number
    updatedAt: number
    airlineId: number
    _all: number
  }


  export type AirplaneAvgAggregateInputType = {
    year?: true
    seats?: true
    capacity?: true
  }

  export type AirplaneSumAggregateInputType = {
    year?: true
    seats?: true
    capacity?: true
  }

  export type AirplaneMinAggregateInputType = {
    id?: true
    model?: true
    year?: true
    seats?: true
    capacity?: true
    manufacturer?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
  }

  export type AirplaneMaxAggregateInputType = {
    id?: true
    model?: true
    year?: true
    seats?: true
    capacity?: true
    manufacturer?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
  }

  export type AirplaneCountAggregateInputType = {
    id?: true
    model?: true
    year?: true
    seats?: true
    capacity?: true
    manufacturer?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
    _all?: true
  }

  export type AirplaneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airplane to aggregate.
     */
    where?: AirplaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airplanes to fetch.
     */
    orderBy?: AirplaneOrderByWithRelationInput | AirplaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirplaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airplanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airplanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airplanes
    **/
    _count?: true | AirplaneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirplaneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirplaneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirplaneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirplaneMaxAggregateInputType
  }

  export type GetAirplaneAggregateType<T extends AirplaneAggregateArgs> = {
        [P in keyof T & keyof AggregateAirplane]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirplane[P]>
      : GetScalarType<T[P], AggregateAirplane[P]>
  }




  export type AirplaneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirplaneWhereInput
    orderBy?: AirplaneOrderByWithAggregationInput | AirplaneOrderByWithAggregationInput[]
    by: AirplaneScalarFieldEnum[] | AirplaneScalarFieldEnum
    having?: AirplaneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirplaneCountAggregateInputType | true
    _avg?: AirplaneAvgAggregateInputType
    _sum?: AirplaneSumAggregateInputType
    _min?: AirplaneMinAggregateInputType
    _max?: AirplaneMaxAggregateInputType
  }

  export type AirplaneGroupByOutputType = {
    id: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt: Date
    updatedAt: Date
    airlineId: string
    _count: AirplaneCountAggregateOutputType | null
    _avg: AirplaneAvgAggregateOutputType | null
    _sum: AirplaneSumAggregateOutputType | null
    _min: AirplaneMinAggregateOutputType | null
    _max: AirplaneMaxAggregateOutputType | null
  }

  type GetAirplaneGroupByPayload<T extends AirplaneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirplaneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirplaneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirplaneGroupByOutputType[P]>
            : GetScalarType<T[P], AirplaneGroupByOutputType[P]>
        }
      >
    >


  export type AirplaneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    year?: boolean
    seats?: boolean
    capacity?: boolean
    manufacturer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    flights?: boolean | Airplane$flightsArgs<ExtArgs>
    _count?: boolean | AirplaneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airplane"]>



  export type AirplaneSelectScalar = {
    id?: boolean
    model?: boolean
    year?: boolean
    seats?: boolean
    capacity?: boolean
    manufacturer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
  }

  export type AirplaneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "year" | "seats" | "capacity" | "manufacturer" | "createdAt" | "updatedAt" | "airlineId", ExtArgs["result"]["airplane"]>
  export type AirplaneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    flights?: boolean | Airplane$flightsArgs<ExtArgs>
    _count?: boolean | AirplaneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AirplanePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airplane"
    objects: {
      airline: Prisma.$AirlinePayload<ExtArgs>
      flights: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      year: number
      seats: number
      capacity: number
      manufacturer: string
      createdAt: Date
      updatedAt: Date
      airlineId: string
    }, ExtArgs["result"]["airplane"]>
    composites: {}
  }

  type AirplaneGetPayload<S extends boolean | null | undefined | AirplaneDefaultArgs> = $Result.GetResult<Prisma.$AirplanePayload, S>

  type AirplaneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirplaneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirplaneCountAggregateInputType | true
    }

  export interface AirplaneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airplane'], meta: { name: 'Airplane' } }
    /**
     * Find zero or one Airplane that matches the filter.
     * @param {AirplaneFindUniqueArgs} args - Arguments to find a Airplane
     * @example
     * // Get one Airplane
     * const airplane = await prisma.airplane.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirplaneFindUniqueArgs>(args: SelectSubset<T, AirplaneFindUniqueArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airplane that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirplaneFindUniqueOrThrowArgs} args - Arguments to find a Airplane
     * @example
     * // Get one Airplane
     * const airplane = await prisma.airplane.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirplaneFindUniqueOrThrowArgs>(args: SelectSubset<T, AirplaneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airplane that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneFindFirstArgs} args - Arguments to find a Airplane
     * @example
     * // Get one Airplane
     * const airplane = await prisma.airplane.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirplaneFindFirstArgs>(args?: SelectSubset<T, AirplaneFindFirstArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airplane that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneFindFirstOrThrowArgs} args - Arguments to find a Airplane
     * @example
     * // Get one Airplane
     * const airplane = await prisma.airplane.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirplaneFindFirstOrThrowArgs>(args?: SelectSubset<T, AirplaneFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airplanes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airplanes
     * const airplanes = await prisma.airplane.findMany()
     * 
     * // Get first 10 Airplanes
     * const airplanes = await prisma.airplane.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airplaneWithIdOnly = await prisma.airplane.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirplaneFindManyArgs>(args?: SelectSubset<T, AirplaneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airplane.
     * @param {AirplaneCreateArgs} args - Arguments to create a Airplane.
     * @example
     * // Create one Airplane
     * const Airplane = await prisma.airplane.create({
     *   data: {
     *     // ... data to create a Airplane
     *   }
     * })
     * 
     */
    create<T extends AirplaneCreateArgs>(args: SelectSubset<T, AirplaneCreateArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airplanes.
     * @param {AirplaneCreateManyArgs} args - Arguments to create many Airplanes.
     * @example
     * // Create many Airplanes
     * const airplane = await prisma.airplane.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirplaneCreateManyArgs>(args?: SelectSubset<T, AirplaneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Airplane.
     * @param {AirplaneDeleteArgs} args - Arguments to delete one Airplane.
     * @example
     * // Delete one Airplane
     * const Airplane = await prisma.airplane.delete({
     *   where: {
     *     // ... filter to delete one Airplane
     *   }
     * })
     * 
     */
    delete<T extends AirplaneDeleteArgs>(args: SelectSubset<T, AirplaneDeleteArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airplane.
     * @param {AirplaneUpdateArgs} args - Arguments to update one Airplane.
     * @example
     * // Update one Airplane
     * const airplane = await prisma.airplane.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirplaneUpdateArgs>(args: SelectSubset<T, AirplaneUpdateArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airplanes.
     * @param {AirplaneDeleteManyArgs} args - Arguments to filter Airplanes to delete.
     * @example
     * // Delete a few Airplanes
     * const { count } = await prisma.airplane.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirplaneDeleteManyArgs>(args?: SelectSubset<T, AirplaneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airplanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airplanes
     * const airplane = await prisma.airplane.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirplaneUpdateManyArgs>(args: SelectSubset<T, AirplaneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airplane.
     * @param {AirplaneUpsertArgs} args - Arguments to update or create a Airplane.
     * @example
     * // Update or create a Airplane
     * const airplane = await prisma.airplane.upsert({
     *   create: {
     *     // ... data to create a Airplane
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airplane we want to update
     *   }
     * })
     */
    upsert<T extends AirplaneUpsertArgs>(args: SelectSubset<T, AirplaneUpsertArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airplanes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneCountArgs} args - Arguments to filter Airplanes to count.
     * @example
     * // Count the number of Airplanes
     * const count = await prisma.airplane.count({
     *   where: {
     *     // ... the filter for the Airplanes we want to count
     *   }
     * })
    **/
    count<T extends AirplaneCountArgs>(
      args?: Subset<T, AirplaneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirplaneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airplane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirplaneAggregateArgs>(args: Subset<T, AirplaneAggregateArgs>): Prisma.PrismaPromise<GetAirplaneAggregateType<T>>

    /**
     * Group by Airplane.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirplaneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirplaneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirplaneGroupByArgs['orderBy'] }
        : { orderBy?: AirplaneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirplaneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirplaneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airplane model
   */
  readonly fields: AirplaneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airplane.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirplaneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flights<T extends Airplane$flightsArgs<ExtArgs> = {}>(args?: Subset<T, Airplane$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airplane model
   */
  interface AirplaneFieldRefs {
    readonly id: FieldRef<"Airplane", 'String'>
    readonly model: FieldRef<"Airplane", 'String'>
    readonly year: FieldRef<"Airplane", 'Int'>
    readonly seats: FieldRef<"Airplane", 'Int'>
    readonly capacity: FieldRef<"Airplane", 'Int'>
    readonly manufacturer: FieldRef<"Airplane", 'String'>
    readonly createdAt: FieldRef<"Airplane", 'DateTime'>
    readonly updatedAt: FieldRef<"Airplane", 'DateTime'>
    readonly airlineId: FieldRef<"Airplane", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Airplane findUnique
   */
  export type AirplaneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter, which Airplane to fetch.
     */
    where: AirplaneWhereUniqueInput
  }

  /**
   * Airplane findUniqueOrThrow
   */
  export type AirplaneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter, which Airplane to fetch.
     */
    where: AirplaneWhereUniqueInput
  }

  /**
   * Airplane findFirst
   */
  export type AirplaneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter, which Airplane to fetch.
     */
    where?: AirplaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airplanes to fetch.
     */
    orderBy?: AirplaneOrderByWithRelationInput | AirplaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airplanes.
     */
    cursor?: AirplaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airplanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airplanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airplanes.
     */
    distinct?: AirplaneScalarFieldEnum | AirplaneScalarFieldEnum[]
  }

  /**
   * Airplane findFirstOrThrow
   */
  export type AirplaneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter, which Airplane to fetch.
     */
    where?: AirplaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airplanes to fetch.
     */
    orderBy?: AirplaneOrderByWithRelationInput | AirplaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airplanes.
     */
    cursor?: AirplaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airplanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airplanes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airplanes.
     */
    distinct?: AirplaneScalarFieldEnum | AirplaneScalarFieldEnum[]
  }

  /**
   * Airplane findMany
   */
  export type AirplaneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter, which Airplanes to fetch.
     */
    where?: AirplaneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airplanes to fetch.
     */
    orderBy?: AirplaneOrderByWithRelationInput | AirplaneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airplanes.
     */
    cursor?: AirplaneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airplanes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airplanes.
     */
    skip?: number
    distinct?: AirplaneScalarFieldEnum | AirplaneScalarFieldEnum[]
  }

  /**
   * Airplane create
   */
  export type AirplaneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * The data needed to create a Airplane.
     */
    data: XOR<AirplaneCreateInput, AirplaneUncheckedCreateInput>
  }

  /**
   * Airplane createMany
   */
  export type AirplaneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airplanes.
     */
    data: AirplaneCreateManyInput | AirplaneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airplane update
   */
  export type AirplaneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * The data needed to update a Airplane.
     */
    data: XOR<AirplaneUpdateInput, AirplaneUncheckedUpdateInput>
    /**
     * Choose, which Airplane to update.
     */
    where: AirplaneWhereUniqueInput
  }

  /**
   * Airplane updateMany
   */
  export type AirplaneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airplanes.
     */
    data: XOR<AirplaneUpdateManyMutationInput, AirplaneUncheckedUpdateManyInput>
    /**
     * Filter which Airplanes to update
     */
    where?: AirplaneWhereInput
    /**
     * Limit how many Airplanes to update.
     */
    limit?: number
  }

  /**
   * Airplane upsert
   */
  export type AirplaneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * The filter to search for the Airplane to update in case it exists.
     */
    where: AirplaneWhereUniqueInput
    /**
     * In case the Airplane found by the `where` argument doesn't exist, create a new Airplane with this data.
     */
    create: XOR<AirplaneCreateInput, AirplaneUncheckedCreateInput>
    /**
     * In case the Airplane was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirplaneUpdateInput, AirplaneUncheckedUpdateInput>
  }

  /**
   * Airplane delete
   */
  export type AirplaneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    /**
     * Filter which Airplane to delete.
     */
    where: AirplaneWhereUniqueInput
  }

  /**
   * Airplane deleteMany
   */
  export type AirplaneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airplanes to delete
     */
    where?: AirplaneWhereInput
    /**
     * Limit how many Airplanes to delete.
     */
    limit?: number
  }

  /**
   * Airplane.flights
   */
  export type Airplane$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airplane without action
   */
  export type AirplaneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
  }


  /**
   * Model Airport
   */

  export type AggregateAirport = {
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  export type AirportAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type AirportSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type AirportMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    cityId: string | null
    lat: number | null
    lng: number | null
    address: string | null
    timezone: string | null
    website: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    countryId: string | null
  }

  export type AirportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    cityId: string | null
    lat: number | null
    lng: number | null
    address: string | null
    timezone: string | null
    website: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    countryId: string | null
  }

  export type AirportCountAggregateOutputType = {
    id: number
    name: number
    code: number
    cityId: number
    lat: number
    lng: number
    address: number
    timezone: number
    website: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    countryId: number
    _all: number
  }


  export type AirportAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type AirportSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type AirportMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    cityId?: true
    lat?: true
    lng?: true
    address?: true
    timezone?: true
    website?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
  }

  export type AirportMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    cityId?: true
    lat?: true
    lng?: true
    address?: true
    timezone?: true
    website?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
  }

  export type AirportCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    cityId?: true
    lat?: true
    lng?: true
    address?: true
    timezone?: true
    website?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    countryId?: true
    _all?: true
  }

  export type AirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airport to aggregate.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airports
    **/
    _count?: true | AirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportMaxAggregateInputType
  }

  export type GetAirportAggregateType<T extends AirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirport[P]>
      : GetScalarType<T[P], AggregateAirport[P]>
  }




  export type AirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithAggregationInput | AirportOrderByWithAggregationInput[]
    by: AirportScalarFieldEnum[] | AirportScalarFieldEnum
    having?: AirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportCountAggregateInputType | true
    _avg?: AirportAvgAggregateInputType
    _sum?: AirportSumAggregateInputType
    _min?: AirportMinAggregateInputType
    _max?: AirportMaxAggregateInputType
  }

  export type AirportGroupByOutputType = {
    id: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    countryId: string
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  type GetAirportGroupByPayload<T extends AirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirportGroupByOutputType[P]>
        }
      >
    >


  export type AirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    timezone?: boolean
    website?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    departures?: boolean | Airport$departuresArgs<ExtArgs>
    arrivals?: boolean | Airport$arrivalsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airport"]>



  export type AirportSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    address?: boolean
    timezone?: boolean
    website?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    countryId?: boolean
  }

  export type AirportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "cityId" | "lat" | "lng" | "address" | "timezone" | "website" | "phoneNumber" | "createdAt" | "updatedAt" | "countryId", ExtArgs["result"]["airport"]>
  export type AirportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
    departures?: boolean | Airport$departuresArgs<ExtArgs>
    arrivals?: boolean | Airport$arrivalsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airport"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
      departures: Prisma.$FlightPayload<ExtArgs>[]
      arrivals: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      cityId: string
      lat: number
      lng: number
      address: string
      timezone: string
      website: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
      countryId: string
    }, ExtArgs["result"]["airport"]>
    composites: {}
  }

  type AirportGetPayload<S extends boolean | null | undefined | AirportDefaultArgs> = $Result.GetResult<Prisma.$AirportPayload, S>

  type AirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportCountAggregateInputType | true
    }

  export interface AirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airport'], meta: { name: 'Airport' } }
    /**
     * Find zero or one Airport that matches the filter.
     * @param {AirportFindUniqueArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportFindUniqueArgs>(args: SelectSubset<T, AirportFindUniqueArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirportFindUniqueOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportFindFirstArgs>(args?: SelectSubset<T, AirportFindFirstArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airport.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportWithIdOnly = await prisma.airport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportFindManyArgs>(args?: SelectSubset<T, AirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airport.
     * @param {AirportCreateArgs} args - Arguments to create a Airport.
     * @example
     * // Create one Airport
     * const Airport = await prisma.airport.create({
     *   data: {
     *     // ... data to create a Airport
     *   }
     * })
     * 
     */
    create<T extends AirportCreateArgs>(args: SelectSubset<T, AirportCreateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airports.
     * @param {AirportCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportCreateManyArgs>(args?: SelectSubset<T, AirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Airport.
     * @param {AirportDeleteArgs} args - Arguments to delete one Airport.
     * @example
     * // Delete one Airport
     * const Airport = await prisma.airport.delete({
     *   where: {
     *     // ... filter to delete one Airport
     *   }
     * })
     * 
     */
    delete<T extends AirportDeleteArgs>(args: SelectSubset<T, AirportDeleteArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airport.
     * @param {AirportUpdateArgs} args - Arguments to update one Airport.
     * @example
     * // Update one Airport
     * const airport = await prisma.airport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportUpdateArgs>(args: SelectSubset<T, AirportUpdateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airports.
     * @param {AirportDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportDeleteManyArgs>(args?: SelectSubset<T, AirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportUpdateManyArgs>(args: SelectSubset<T, AirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airport.
     * @param {AirportUpsertArgs} args - Arguments to update or create a Airport.
     * @example
     * // Update or create a Airport
     * const airport = await prisma.airport.upsert({
     *   create: {
     *     // ... data to create a Airport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airport we want to update
     *   }
     * })
     */
    upsert<T extends AirportUpsertArgs>(args: SelectSubset<T, AirportUpsertArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airport.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends AirportCountArgs>(
      args?: Subset<T, AirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirportAggregateArgs>(args: Subset<T, AirportAggregateArgs>): Prisma.PrismaPromise<GetAirportAggregateType<T>>

    /**
     * Group by Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportGroupByArgs['orderBy'] }
        : { orderBy?: AirportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airport model
   */
  readonly fields: AirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departures<T extends Airport$departuresArgs<ExtArgs> = {}>(args?: Subset<T, Airport$departuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arrivals<T extends Airport$arrivalsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$arrivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airport model
   */
  interface AirportFieldRefs {
    readonly id: FieldRef<"Airport", 'String'>
    readonly name: FieldRef<"Airport", 'String'>
    readonly code: FieldRef<"Airport", 'String'>
    readonly cityId: FieldRef<"Airport", 'String'>
    readonly lat: FieldRef<"Airport", 'Float'>
    readonly lng: FieldRef<"Airport", 'Float'>
    readonly address: FieldRef<"Airport", 'String'>
    readonly timezone: FieldRef<"Airport", 'String'>
    readonly website: FieldRef<"Airport", 'String'>
    readonly phoneNumber: FieldRef<"Airport", 'String'>
    readonly createdAt: FieldRef<"Airport", 'DateTime'>
    readonly updatedAt: FieldRef<"Airport", 'DateTime'>
    readonly countryId: FieldRef<"Airport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Airport findUnique
   */
  export type AirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findUniqueOrThrow
   */
  export type AirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findFirst
   */
  export type AirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findFirstOrThrow
   */
  export type AirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findMany
   */
  export type AirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airports to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport create
   */
  export type AirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to create a Airport.
     */
    data: XOR<AirportCreateInput, AirportUncheckedCreateInput>
  }

  /**
   * Airport createMany
   */
  export type AirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airport update
   */
  export type AirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to update a Airport.
     */
    data: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
    /**
     * Choose, which Airport to update.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport updateMany
   */
  export type AirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport upsert
   */
  export type AirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The filter to search for the Airport to update in case it exists.
     */
    where: AirportWhereUniqueInput
    /**
     * In case the Airport found by the `where` argument doesn't exist, create a new Airport with this data.
     */
    create: XOR<AirportCreateInput, AirportUncheckedCreateInput>
    /**
     * In case the Airport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
  }

  /**
   * Airport delete
   */
  export type AirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter which Airport to delete.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport deleteMany
   */
  export type AirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airports to delete
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to delete.
     */
    limit?: number
  }

  /**
   * Airport.departures
   */
  export type Airport$departuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport.arrivals
   */
  export type Airport$arrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport without action
   */
  export type AirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
  }


  /**
   * Model Flight
   */

  export type AggregateFlight = {
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  export type FlightAvgAggregateOutputType = {
    flightDuration: number | null
    flightDistance: number | null
  }

  export type FlightSumAggregateOutputType = {
    flightDuration: number | null
    flightDistance: number | null
  }

  export type FlightMinAggregateOutputType = {
    id: string | null
    airlineId: string | null
    airplaneId: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    flightDuration: number | null
    flightDistance: number | null
    fromAirportId: string | null
    toAirportId: string | null
    flightNumber: string | null
    flightStatus: $Enums.FlightStatus | null
  }

  export type FlightMaxAggregateOutputType = {
    id: string | null
    airlineId: string | null
    airplaneId: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    flightDuration: number | null
    flightDistance: number | null
    fromAirportId: string | null
    toAirportId: string | null
    flightNumber: string | null
    flightStatus: $Enums.FlightStatus | null
  }

  export type FlightCountAggregateOutputType = {
    id: number
    airlineId: number
    airplaneId: number
    departureTime: number
    arrivalTime: number
    createdAt: number
    updatedAt: number
    flightDuration: number
    flightDistance: number
    fromAirportId: number
    toAirportId: number
    flightNumber: number
    flightStatus: number
    _all: number
  }


  export type FlightAvgAggregateInputType = {
    flightDuration?: true
    flightDistance?: true
  }

  export type FlightSumAggregateInputType = {
    flightDuration?: true
    flightDistance?: true
  }

  export type FlightMinAggregateInputType = {
    id?: true
    airlineId?: true
    airplaneId?: true
    departureTime?: true
    arrivalTime?: true
    createdAt?: true
    updatedAt?: true
    flightDuration?: true
    flightDistance?: true
    fromAirportId?: true
    toAirportId?: true
    flightNumber?: true
    flightStatus?: true
  }

  export type FlightMaxAggregateInputType = {
    id?: true
    airlineId?: true
    airplaneId?: true
    departureTime?: true
    arrivalTime?: true
    createdAt?: true
    updatedAt?: true
    flightDuration?: true
    flightDistance?: true
    fromAirportId?: true
    toAirportId?: true
    flightNumber?: true
    flightStatus?: true
  }

  export type FlightCountAggregateInputType = {
    id?: true
    airlineId?: true
    airplaneId?: true
    departureTime?: true
    arrivalTime?: true
    createdAt?: true
    updatedAt?: true
    flightDuration?: true
    flightDistance?: true
    fromAirportId?: true
    toAirportId?: true
    flightNumber?: true
    flightStatus?: true
    _all?: true
  }

  export type FlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flight to aggregate.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flights
    **/
    _count?: true | FlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightMaxAggregateInputType
  }

  export type GetFlightAggregateType<T extends FlightAggregateArgs> = {
        [P in keyof T & keyof AggregateFlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlight[P]>
      : GetScalarType<T[P], AggregateFlight[P]>
  }




  export type FlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithAggregationInput | FlightOrderByWithAggregationInput[]
    by: FlightScalarFieldEnum[] | FlightScalarFieldEnum
    having?: FlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightCountAggregateInputType | true
    _avg?: FlightAvgAggregateInputType
    _sum?: FlightSumAggregateInputType
    _min?: FlightMinAggregateInputType
    _max?: FlightMaxAggregateInputType
  }

  export type FlightGroupByOutputType = {
    id: string
    airlineId: string | null
    airplaneId: string | null
    departureTime: Date
    arrivalTime: Date
    createdAt: Date
    updatedAt: Date
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  type GetFlightGroupByPayload<T extends FlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightGroupByOutputType[P]>
            : GetScalarType<T[P], FlightGroupByOutputType[P]>
        }
      >
    >


  export type FlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airlineId?: boolean
    airplaneId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flightDuration?: boolean
    flightDistance?: boolean
    fromAirportId?: boolean
    toAirportId?: boolean
    flightNumber?: boolean
    flightStatus?: boolean
    airline?: boolean | Flight$airlineArgs<ExtArgs>
    airplane?: boolean | Flight$airplaneArgs<ExtArgs>
    fromAirport?: boolean | AirportDefaultArgs<ExtArgs>
    toAirport?: boolean | AirportDefaultArgs<ExtArgs>
    bookings?: boolean | Flight$bookingsArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>



  export type FlightSelectScalar = {
    id?: boolean
    airlineId?: boolean
    airplaneId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flightDuration?: boolean
    flightDistance?: boolean
    fromAirportId?: boolean
    toAirportId?: boolean
    flightNumber?: boolean
    flightStatus?: boolean
  }

  export type FlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "airlineId" | "airplaneId" | "departureTime" | "arrivalTime" | "createdAt" | "updatedAt" | "flightDuration" | "flightDistance" | "fromAirportId" | "toAirportId" | "flightNumber" | "flightStatus", ExtArgs["result"]["flight"]>
  export type FlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | Flight$airlineArgs<ExtArgs>
    airplane?: boolean | Flight$airplaneArgs<ExtArgs>
    fromAirport?: boolean | AirportDefaultArgs<ExtArgs>
    toAirport?: boolean | AirportDefaultArgs<ExtArgs>
    bookings?: boolean | Flight$bookingsArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flight"
    objects: {
      airline: Prisma.$AirlinePayload<ExtArgs> | null
      airplane: Prisma.$AirplanePayload<ExtArgs> | null
      fromAirport: Prisma.$AirportPayload<ExtArgs>
      toAirport: Prisma.$AirportPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      airlineId: string | null
      airplaneId: string | null
      departureTime: Date
      arrivalTime: Date
      createdAt: Date
      updatedAt: Date
      flightDuration: number
      flightDistance: number
      fromAirportId: string
      toAirportId: string
      flightNumber: string
      flightStatus: $Enums.FlightStatus
    }, ExtArgs["result"]["flight"]>
    composites: {}
  }

  type FlightGetPayload<S extends boolean | null | undefined | FlightDefaultArgs> = $Result.GetResult<Prisma.$FlightPayload, S>

  type FlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightCountAggregateInputType | true
    }

  export interface FlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flight'], meta: { name: 'Flight' } }
    /**
     * Find zero or one Flight that matches the filter.
     * @param {FlightFindUniqueArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightFindUniqueArgs>(args: SelectSubset<T, FlightFindUniqueArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightFindUniqueOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightFindFirstArgs>(args?: SelectSubset<T, FlightFindFirstArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flight.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightWithIdOnly = await prisma.flight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightFindManyArgs>(args?: SelectSubset<T, FlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flight.
     * @param {FlightCreateArgs} args - Arguments to create a Flight.
     * @example
     * // Create one Flight
     * const Flight = await prisma.flight.create({
     *   data: {
     *     // ... data to create a Flight
     *   }
     * })
     * 
     */
    create<T extends FlightCreateArgs>(args: SelectSubset<T, FlightCreateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {FlightCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightCreateManyArgs>(args?: SelectSubset<T, FlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flight.
     * @param {FlightDeleteArgs} args - Arguments to delete one Flight.
     * @example
     * // Delete one Flight
     * const Flight = await prisma.flight.delete({
     *   where: {
     *     // ... filter to delete one Flight
     *   }
     * })
     * 
     */
    delete<T extends FlightDeleteArgs>(args: SelectSubset<T, FlightDeleteArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flight.
     * @param {FlightUpdateArgs} args - Arguments to update one Flight.
     * @example
     * // Update one Flight
     * const flight = await prisma.flight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightUpdateArgs>(args: SelectSubset<T, FlightUpdateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {FlightDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightDeleteManyArgs>(args?: SelectSubset<T, FlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightUpdateManyArgs>(args: SelectSubset<T, FlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flight.
     * @param {FlightUpsertArgs} args - Arguments to update or create a Flight.
     * @example
     * // Update or create a Flight
     * const flight = await prisma.flight.upsert({
     *   create: {
     *     // ... data to create a Flight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flight we want to update
     *   }
     * })
     */
    upsert<T extends FlightUpsertArgs>(args: SelectSubset<T, FlightUpsertArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flight.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends FlightCountArgs>(
      args?: Subset<T, FlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightAggregateArgs>(args: Subset<T, FlightAggregateArgs>): Prisma.PrismaPromise<GetFlightAggregateType<T>>

    /**
     * Group by Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightGroupByArgs['orderBy'] }
        : { orderBy?: FlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flight model
   */
  readonly fields: FlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airline<T extends Flight$airlineArgs<ExtArgs> = {}>(args?: Subset<T, Flight$airlineArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    airplane<T extends Flight$airplaneArgs<ExtArgs> = {}>(args?: Subset<T, Flight$airplaneArgs<ExtArgs>>): Prisma__AirplaneClient<$Result.GetResult<Prisma.$AirplanePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fromAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Flight$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Flight$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flight model
   */
  interface FlightFieldRefs {
    readonly id: FieldRef<"Flight", 'String'>
    readonly airlineId: FieldRef<"Flight", 'String'>
    readonly airplaneId: FieldRef<"Flight", 'String'>
    readonly departureTime: FieldRef<"Flight", 'DateTime'>
    readonly arrivalTime: FieldRef<"Flight", 'DateTime'>
    readonly createdAt: FieldRef<"Flight", 'DateTime'>
    readonly updatedAt: FieldRef<"Flight", 'DateTime'>
    readonly flightDuration: FieldRef<"Flight", 'Int'>
    readonly flightDistance: FieldRef<"Flight", 'Int'>
    readonly fromAirportId: FieldRef<"Flight", 'String'>
    readonly toAirportId: FieldRef<"Flight", 'String'>
    readonly flightNumber: FieldRef<"Flight", 'String'>
    readonly flightStatus: FieldRef<"Flight", 'FlightStatus'>
  }
    

  // Custom InputTypes
  /**
   * Flight findUnique
   */
  export type FlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findUniqueOrThrow
   */
  export type FlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findFirst
   */
  export type FlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findFirstOrThrow
   */
  export type FlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findMany
   */
  export type FlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight create
   */
  export type FlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Flight.
     */
    data: XOR<FlightCreateInput, FlightUncheckedCreateInput>
  }

  /**
   * Flight createMany
   */
  export type FlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flight update
   */
  export type FlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Flight.
     */
    data: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
    /**
     * Choose, which Flight to update.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight updateMany
   */
  export type FlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
  }

  /**
   * Flight upsert
   */
  export type FlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Flight to update in case it exists.
     */
    where: FlightWhereUniqueInput
    /**
     * In case the Flight found by the `where` argument doesn't exist, create a new Flight with this data.
     */
    create: XOR<FlightCreateInput, FlightUncheckedCreateInput>
    /**
     * In case the Flight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
  }

  /**
   * Flight delete
   */
  export type FlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter which Flight to delete.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight deleteMany
   */
  export type FlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to delete
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to delete.
     */
    limit?: number
  }

  /**
   * Flight.airline
   */
  export type Flight$airlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    where?: AirlineWhereInput
  }

  /**
   * Flight.airplane
   */
  export type Flight$airplaneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airplane
     */
    select?: AirplaneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airplane
     */
    omit?: AirplaneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirplaneInclude<ExtArgs> | null
    where?: AirplaneWhereInput
  }

  /**
   * Flight.bookings
   */
  export type Flight$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Flight without action
   */
  export type FlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
  }


  /**
   * Model Passenger
   */

  export type AggregatePassenger = {
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  export type PassengerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: string | null
    nationality: string | null
    passportNumber: string | null
    address: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    frequentFlyer: boolean | null
    mealPreference: string | null
    specialRequirements: string | null
    bookingDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: string | null
    nationality: string | null
    passportNumber: string | null
    address: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    frequentFlyer: boolean | null
    mealPreference: string | null
    specialRequirements: string | null
    bookingDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    gender: number
    nationality: number
    passportNumber: number
    address: number
    emergencyContact: number
    emergencyPhone: number
    frequentFlyer: number
    mealPreference: number
    specialRequirements: number
    bookingDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassengerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    nationality?: true
    passportNumber?: true
    address?: true
    emergencyContact?: true
    emergencyPhone?: true
    frequentFlyer?: true
    mealPreference?: true
    specialRequirements?: true
    bookingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    nationality?: true
    passportNumber?: true
    address?: true
    emergencyContact?: true
    emergencyPhone?: true
    frequentFlyer?: true
    mealPreference?: true
    specialRequirements?: true
    bookingDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    nationality?: true
    passportNumber?: true
    address?: true
    emergencyContact?: true
    emergencyPhone?: true
    frequentFlyer?: true
    mealPreference?: true
    specialRequirements?: true
    bookingDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passenger to aggregate.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passengers
    **/
    _count?: true | PassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassengerMaxAggregateInputType
  }

  export type GetPassengerAggregateType<T extends PassengerAggregateArgs> = {
        [P in keyof T & keyof AggregatePassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassenger[P]>
      : GetScalarType<T[P], AggregatePassenger[P]>
  }




  export type PassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerWhereInput
    orderBy?: PassengerOrderByWithAggregationInput | PassengerOrderByWithAggregationInput[]
    by: PassengerScalarFieldEnum[] | PassengerScalarFieldEnum
    having?: PassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassengerCountAggregateInputType | true
    _min?: PassengerMinAggregateInputType
    _max?: PassengerMaxAggregateInputType
  }

  export type PassengerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date
    gender: string | null
    nationality: string | null
    passportNumber: string | null
    address: string | null
    emergencyContact: string | null
    emergencyPhone: string | null
    frequentFlyer: boolean
    mealPreference: string | null
    specialRequirements: string | null
    bookingDate: Date
    createdAt: Date
    updatedAt: Date
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  type GetPassengerGroupByPayload<T extends PassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassengerGroupByOutputType[P]>
            : GetScalarType<T[P], PassengerGroupByOutputType[P]>
        }
      >
    >


  export type PassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nationality?: boolean
    passportNumber?: boolean
    address?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    frequentFlyer?: boolean
    mealPreference?: boolean
    specialRequirements?: boolean
    bookingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>



  export type PassengerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    nationality?: boolean
    passportNumber?: boolean
    address?: boolean
    emergencyContact?: boolean
    emergencyPhone?: boolean
    frequentFlyer?: boolean
    mealPreference?: boolean
    specialRequirements?: boolean
    bookingDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "gender" | "nationality" | "passportNumber" | "address" | "emergencyContact" | "emergencyPhone" | "frequentFlyer" | "mealPreference" | "specialRequirements" | "bookingDate" | "createdAt" | "updatedAt", ExtArgs["result"]["passenger"]>
  export type PassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passenger"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string
      dateOfBirth: Date
      gender: string | null
      nationality: string | null
      passportNumber: string | null
      address: string | null
      emergencyContact: string | null
      emergencyPhone: string | null
      frequentFlyer: boolean
      mealPreference: string | null
      specialRequirements: string | null
      bookingDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passenger"]>
    composites: {}
  }

  type PassengerGetPayload<S extends boolean | null | undefined | PassengerDefaultArgs> = $Result.GetResult<Prisma.$PassengerPayload, S>

  type PassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassengerCountAggregateInputType | true
    }

  export interface PassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passenger'], meta: { name: 'Passenger' } }
    /**
     * Find zero or one Passenger that matches the filter.
     * @param {PassengerFindUniqueArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassengerFindUniqueArgs>(args: SelectSubset<T, PassengerFindUniqueArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassengerFindUniqueOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, PassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassengerFindFirstArgs>(args?: SelectSubset<T, PassengerFindFirstArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, PassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passengers
     * const passengers = await prisma.passenger.findMany()
     * 
     * // Get first 10 Passengers
     * const passengers = await prisma.passenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passengerWithIdOnly = await prisma.passenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassengerFindManyArgs>(args?: SelectSubset<T, PassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passenger.
     * @param {PassengerCreateArgs} args - Arguments to create a Passenger.
     * @example
     * // Create one Passenger
     * const Passenger = await prisma.passenger.create({
     *   data: {
     *     // ... data to create a Passenger
     *   }
     * })
     * 
     */
    create<T extends PassengerCreateArgs>(args: SelectSubset<T, PassengerCreateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passengers.
     * @param {PassengerCreateManyArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassengerCreateManyArgs>(args?: SelectSubset<T, PassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Passenger.
     * @param {PassengerDeleteArgs} args - Arguments to delete one Passenger.
     * @example
     * // Delete one Passenger
     * const Passenger = await prisma.passenger.delete({
     *   where: {
     *     // ... filter to delete one Passenger
     *   }
     * })
     * 
     */
    delete<T extends PassengerDeleteArgs>(args: SelectSubset<T, PassengerDeleteArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passenger.
     * @param {PassengerUpdateArgs} args - Arguments to update one Passenger.
     * @example
     * // Update one Passenger
     * const passenger = await prisma.passenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassengerUpdateArgs>(args: SelectSubset<T, PassengerUpdateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passengers.
     * @param {PassengerDeleteManyArgs} args - Arguments to filter Passengers to delete.
     * @example
     * // Delete a few Passengers
     * const { count } = await prisma.passenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassengerDeleteManyArgs>(args?: SelectSubset<T, PassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassengerUpdateManyArgs>(args: SelectSubset<T, PassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Passenger.
     * @param {PassengerUpsertArgs} args - Arguments to update or create a Passenger.
     * @example
     * // Update or create a Passenger
     * const passenger = await prisma.passenger.upsert({
     *   create: {
     *     // ... data to create a Passenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passenger we want to update
     *   }
     * })
     */
    upsert<T extends PassengerUpsertArgs>(args: SelectSubset<T, PassengerUpsertArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerCountArgs} args - Arguments to filter Passengers to count.
     * @example
     * // Count the number of Passengers
     * const count = await prisma.passenger.count({
     *   where: {
     *     // ... the filter for the Passengers we want to count
     *   }
     * })
    **/
    count<T extends PassengerCountArgs>(
      args?: Subset<T, PassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassengerAggregateArgs>(args: Subset<T, PassengerAggregateArgs>): Prisma.PrismaPromise<GetPassengerAggregateType<T>>

    /**
     * Group by Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassengerGroupByArgs['orderBy'] }
        : { orderBy?: PassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passenger model
   */
  readonly fields: PassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Passenger$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passenger model
   */
  interface PassengerFieldRefs {
    readonly id: FieldRef<"Passenger", 'String'>
    readonly firstName: FieldRef<"Passenger", 'String'>
    readonly lastName: FieldRef<"Passenger", 'String'>
    readonly email: FieldRef<"Passenger", 'String'>
    readonly phone: FieldRef<"Passenger", 'String'>
    readonly dateOfBirth: FieldRef<"Passenger", 'DateTime'>
    readonly gender: FieldRef<"Passenger", 'String'>
    readonly nationality: FieldRef<"Passenger", 'String'>
    readonly passportNumber: FieldRef<"Passenger", 'String'>
    readonly address: FieldRef<"Passenger", 'String'>
    readonly emergencyContact: FieldRef<"Passenger", 'String'>
    readonly emergencyPhone: FieldRef<"Passenger", 'String'>
    readonly frequentFlyer: FieldRef<"Passenger", 'Boolean'>
    readonly mealPreference: FieldRef<"Passenger", 'String'>
    readonly specialRequirements: FieldRef<"Passenger", 'String'>
    readonly bookingDate: FieldRef<"Passenger", 'DateTime'>
    readonly createdAt: FieldRef<"Passenger", 'DateTime'>
    readonly updatedAt: FieldRef<"Passenger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passenger findUnique
   */
  export type PassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findUniqueOrThrow
   */
  export type PassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findFirst
   */
  export type PassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findFirstOrThrow
   */
  export type PassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findMany
   */
  export type PassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passengers to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger create
   */
  export type PassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a Passenger.
     */
    data: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
  }

  /**
   * Passenger createMany
   */
  export type PassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passenger update
   */
  export type PassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a Passenger.
     */
    data: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
    /**
     * Choose, which Passenger to update.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger updateMany
   */
  export type PassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger upsert
   */
  export type PassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the Passenger to update in case it exists.
     */
    where: PassengerWhereUniqueInput
    /**
     * In case the Passenger found by the `where` argument doesn't exist, create a new Passenger with this data.
     */
    create: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
    /**
     * In case the Passenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
  }

  /**
   * Passenger delete
   */
  export type PassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter which Passenger to delete.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger deleteMany
   */
  export type PassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passengers to delete
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to delete.
     */
    limit?: number
  }

  /**
   * Passenger.bookings
   */
  export type Passenger$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Passenger without action
   */
  export type PassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    passengerId: string | null
    flightId: string | null
    seatNumber: string | null
    bookingDate: Date | null
    passengerClass: $Enums.PassengerClass | null
    bookingStatus: $Enums.BookingStatus | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    passengerId: string | null
    flightId: string | null
    seatNumber: string | null
    bookingDate: Date | null
    passengerClass: $Enums.PassengerClass | null
    bookingStatus: $Enums.BookingStatus | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    passengerId: number
    flightId: number
    seatNumber: number
    bookingDate: number
    passengerClass: number
    bookingStatus: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    passengerId?: true
    flightId?: true
    seatNumber?: true
    bookingDate?: true
    passengerClass?: true
    bookingStatus?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    passengerId?: true
    flightId?: true
    seatNumber?: true
    bookingDate?: true
    passengerClass?: true
    bookingStatus?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    passengerId?: true
    flightId?: true
    seatNumber?: true
    bookingDate?: true
    passengerClass?: true
    bookingStatus?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    passengerId: string
    flightId: string
    seatNumber: string
    bookingDate: Date
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    flightId?: boolean
    seatNumber?: boolean
    bookingDate?: boolean
    passengerClass?: boolean
    bookingStatus?: boolean
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    passengerId?: boolean
    flightId?: boolean
    seatNumber?: boolean
    bookingDate?: boolean
    passengerClass?: boolean
    bookingStatus?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passengerId" | "flightId" | "seatNumber" | "bookingDate" | "passengerClass" | "bookingStatus", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      passenger: Prisma.$PassengerPayload<ExtArgs>
      flight: Prisma.$FlightPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      passengerId: string
      flightId: string
      seatNumber: string
      bookingDate: Date
      passengerClass: $Enums.PassengerClass
      bookingStatus: $Enums.BookingStatus
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passenger<T extends PassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassengerDefaultArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flight<T extends FlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlightDefaultArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly passengerId: FieldRef<"Booking", 'String'>
    readonly flightId: FieldRef<"Booking", 'String'>
    readonly seatNumber: FieldRef<"Booking", 'String'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly passengerClass: FieldRef<"Booking", 'PassengerClass'>
    readonly bookingStatus: FieldRef<"Booking", 'BookingStatus'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryCode: 'countryCode'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateCode: 'stateCode',
    countryId: 'countryId'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cityIATACode: 'cityIATACode',
    stateId: 'stateId',
    countryId: 'countryId',
    stateCountryKey: 'stateCountryKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const AirlineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AirlineScalarFieldEnum = (typeof AirlineScalarFieldEnum)[keyof typeof AirlineScalarFieldEnum]


  export const AirplaneScalarFieldEnum: {
    id: 'id',
    model: 'model',
    year: 'year',
    seats: 'seats',
    capacity: 'capacity',
    manufacturer: 'manufacturer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    airlineId: 'airlineId'
  };

  export type AirplaneScalarFieldEnum = (typeof AirplaneScalarFieldEnum)[keyof typeof AirplaneScalarFieldEnum]


  export const AirportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    cityId: 'cityId',
    lat: 'lat',
    lng: 'lng',
    address: 'address',
    timezone: 'timezone',
    website: 'website',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    countryId: 'countryId'
  };

  export type AirportScalarFieldEnum = (typeof AirportScalarFieldEnum)[keyof typeof AirportScalarFieldEnum]


  export const FlightScalarFieldEnum: {
    id: 'id',
    airlineId: 'airlineId',
    airplaneId: 'airplaneId',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    flightDuration: 'flightDuration',
    flightDistance: 'flightDistance',
    fromAirportId: 'fromAirportId',
    toAirportId: 'toAirportId',
    flightNumber: 'flightNumber',
    flightStatus: 'flightStatus'
  };

  export type FlightScalarFieldEnum = (typeof FlightScalarFieldEnum)[keyof typeof FlightScalarFieldEnum]


  export const PassengerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    nationality: 'nationality',
    passportNumber: 'passportNumber',
    address: 'address',
    emergencyContact: 'emergencyContact',
    emergencyPhone: 'emergencyPhone',
    frequentFlyer: 'frequentFlyer',
    mealPreference: 'mealPreference',
    specialRequirements: 'specialRequirements',
    bookingDate: 'bookingDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassengerScalarFieldEnum = (typeof PassengerScalarFieldEnum)[keyof typeof PassengerScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    passengerId: 'passengerId',
    flightId: 'flightId',
    seatNumber: 'seatNumber',
    bookingDate: 'bookingDate',
    passengerClass: 'passengerClass',
    bookingStatus: 'bookingStatus'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CountryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    countryCode: 'countryCode'
  };

  export type CountryOrderByRelevanceFieldEnum = (typeof CountryOrderByRelevanceFieldEnum)[keyof typeof CountryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const StateOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    stateCode: 'stateCode',
    countryId: 'countryId'
  };

  export type StateOrderByRelevanceFieldEnum = (typeof StateOrderByRelevanceFieldEnum)[keyof typeof StateOrderByRelevanceFieldEnum]


  export const CityOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    cityIATACode: 'cityIATACode',
    stateId: 'stateId',
    countryId: 'countryId',
    stateCountryKey: 'stateCountryKey'
  };

  export type CityOrderByRelevanceFieldEnum = (typeof CityOrderByRelevanceFieldEnum)[keyof typeof CityOrderByRelevanceFieldEnum]


  export const AirlineOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId',
    logo: 'logo'
  };

  export type AirlineOrderByRelevanceFieldEnum = (typeof AirlineOrderByRelevanceFieldEnum)[keyof typeof AirlineOrderByRelevanceFieldEnum]


  export const AirplaneOrderByRelevanceFieldEnum: {
    id: 'id',
    model: 'model',
    manufacturer: 'manufacturer',
    airlineId: 'airlineId'
  };

  export type AirplaneOrderByRelevanceFieldEnum = (typeof AirplaneOrderByRelevanceFieldEnum)[keyof typeof AirplaneOrderByRelevanceFieldEnum]


  export const AirportOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    cityId: 'cityId',
    address: 'address',
    timezone: 'timezone',
    website: 'website',
    phoneNumber: 'phoneNumber',
    countryId: 'countryId'
  };

  export type AirportOrderByRelevanceFieldEnum = (typeof AirportOrderByRelevanceFieldEnum)[keyof typeof AirportOrderByRelevanceFieldEnum]


  export const FlightOrderByRelevanceFieldEnum: {
    id: 'id',
    airlineId: 'airlineId',
    airplaneId: 'airplaneId',
    fromAirportId: 'fromAirportId',
    toAirportId: 'toAirportId',
    flightNumber: 'flightNumber'
  };

  export type FlightOrderByRelevanceFieldEnum = (typeof FlightOrderByRelevanceFieldEnum)[keyof typeof FlightOrderByRelevanceFieldEnum]


  export const PassengerOrderByRelevanceFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    gender: 'gender',
    nationality: 'nationality',
    passportNumber: 'passportNumber',
    address: 'address',
    emergencyContact: 'emergencyContact',
    emergencyPhone: 'emergencyPhone',
    mealPreference: 'mealPreference',
    specialRequirements: 'specialRequirements'
  };

  export type PassengerOrderByRelevanceFieldEnum = (typeof PassengerOrderByRelevanceFieldEnum)[keyof typeof PassengerOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    id: 'id',
    passengerId: 'passengerId',
    flightId: 'flightId',
    seatNumber: 'seatNumber'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FlightStatus'
   */
  export type EnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PassengerClass'
   */
  export type EnumPassengerClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PassengerClass'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    countryCode?: StringFilter<"Country"> | string
    airlines?: AirlineListRelationFilter
    airports?: AirportListRelationFilter
    cities?: CityListRelationFilter
    State?: StateListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    airlines?: AirlineOrderByRelationAggregateInput
    airports?: AirportOrderByRelationAggregateInput
    cities?: CityOrderByRelationAggregateInput
    State?: StateOrderByRelationAggregateInput
    _relevance?: CountryOrderByRelevanceInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    countryCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    airlines?: AirlineListRelationFilter
    airports?: AirportListRelationFilter
    cities?: CityListRelationFilter
    State?: StateListRelationFilter
  }, "id" | "countryCode">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    countryCode?: StringWithAggregatesFilter<"Country"> | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: StringFilter<"State"> | string
    name?: StringFilter<"State"> | string
    stateCode?: StringNullableFilter<"State"> | string | null
    countryId?: StringFilter<"State"> | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cities?: CityListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateCode?: SortOrderInput | SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    cities?: CityOrderByRelationAggregateInput
    _relevance?: StateOrderByRelevanceInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_countryId?: StateNameCountryIdCompoundUniqueInput
    stateCode_countryId?: StateStateCodeCountryIdCompoundUniqueInput
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    name?: StringFilter<"State"> | string
    stateCode?: StringNullableFilter<"State"> | string | null
    countryId?: StringFilter<"State"> | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cities?: CityListRelationFilter
  }, "id" | "name_countryId" | "stateCode_countryId">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateCode?: SortOrderInput | SortOrder
    countryId?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"State"> | string
    name?: StringWithAggregatesFilter<"State"> | string
    stateCode?: StringNullableWithAggregatesFilter<"State"> | string | null
    countryId?: StringWithAggregatesFilter<"State"> | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    cityIATACode?: StringFilter<"City"> | string
    stateId?: StringNullableFilter<"City"> | string | null
    countryId?: StringFilter<"City"> | string
    stateCountryKey?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    airports?: AirportListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityIATACode?: SortOrder
    stateId?: SortOrderInput | SortOrder
    countryId?: SortOrder
    stateCountryKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    state?: StateOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    airports?: AirportOrderByRelationAggregateInput
    _relevance?: CityOrderByRelevanceInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_stateCountryKey?: CityNameStateCountryKeyCompoundUniqueInput
    cityIATACode_stateCountryKey?: CityCityIATACodeStateCountryKeyCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    cityIATACode?: StringFilter<"City"> | string
    stateId?: StringNullableFilter<"City"> | string | null
    countryId?: StringFilter<"City"> | string
    stateCountryKey?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    airports?: AirportListRelationFilter
  }, "id" | "name_stateCountryKey" | "cityIATACode_stateCountryKey">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityIATACode?: SortOrder
    stateId?: SortOrderInput | SortOrder
    countryId?: SortOrder
    stateCountryKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    cityIATACode?: StringWithAggregatesFilter<"City"> | string
    stateId?: StringNullableWithAggregatesFilter<"City"> | string | null
    countryId?: StringWithAggregatesFilter<"City"> | string
    stateCountryKey?: StringWithAggregatesFilter<"City"> | string
    createdAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type AirlineWhereInput = {
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    id?: StringFilter<"Airline"> | string
    name?: StringFilter<"Airline"> | string
    countryId?: StringFilter<"Airline"> | string
    logo?: StringFilter<"Airline"> | string
    createdAt?: DateTimeFilter<"Airline"> | Date | string
    updatedAt?: DateTimeFilter<"Airline"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    planes?: AirplaneListRelationFilter
    flights?: FlightListRelationFilter
  }

  export type AirlineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: CountryOrderByWithRelationInput
    planes?: AirplaneOrderByRelationAggregateInput
    flights?: FlightOrderByRelationAggregateInput
    _relevance?: AirlineOrderByRelevanceInput
  }

  export type AirlineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    name?: StringFilter<"Airline"> | string
    countryId?: StringFilter<"Airline"> | string
    logo?: StringFilter<"Airline"> | string
    createdAt?: DateTimeFilter<"Airline"> | Date | string
    updatedAt?: DateTimeFilter<"Airline"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    planes?: AirplaneListRelationFilter
    flights?: FlightListRelationFilter
  }, "id">

  export type AirlineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AirlineCountOrderByAggregateInput
    _max?: AirlineMaxOrderByAggregateInput
    _min?: AirlineMinOrderByAggregateInput
  }

  export type AirlineScalarWhereWithAggregatesInput = {
    AND?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    OR?: AirlineScalarWhereWithAggregatesInput[]
    NOT?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airline"> | string
    name?: StringWithAggregatesFilter<"Airline"> | string
    countryId?: StringWithAggregatesFilter<"Airline"> | string
    logo?: StringWithAggregatesFilter<"Airline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Airline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airline"> | Date | string
  }

  export type AirplaneWhereInput = {
    AND?: AirplaneWhereInput | AirplaneWhereInput[]
    OR?: AirplaneWhereInput[]
    NOT?: AirplaneWhereInput | AirplaneWhereInput[]
    id?: StringFilter<"Airplane"> | string
    model?: StringFilter<"Airplane"> | string
    year?: IntFilter<"Airplane"> | number
    seats?: IntFilter<"Airplane"> | number
    capacity?: IntFilter<"Airplane"> | number
    manufacturer?: StringFilter<"Airplane"> | string
    createdAt?: DateTimeFilter<"Airplane"> | Date | string
    updatedAt?: DateTimeFilter<"Airplane"> | Date | string
    airlineId?: StringFilter<"Airplane"> | string
    airline?: XOR<AirlineScalarRelationFilter, AirlineWhereInput>
    flights?: FlightListRelationFilter
  }

  export type AirplaneOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
    manufacturer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    airline?: AirlineOrderByWithRelationInput
    flights?: FlightOrderByRelationAggregateInput
    _relevance?: AirplaneOrderByRelevanceInput
  }

  export type AirplaneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AirplaneWhereInput | AirplaneWhereInput[]
    OR?: AirplaneWhereInput[]
    NOT?: AirplaneWhereInput | AirplaneWhereInput[]
    model?: StringFilter<"Airplane"> | string
    year?: IntFilter<"Airplane"> | number
    seats?: IntFilter<"Airplane"> | number
    capacity?: IntFilter<"Airplane"> | number
    manufacturer?: StringFilter<"Airplane"> | string
    createdAt?: DateTimeFilter<"Airplane"> | Date | string
    updatedAt?: DateTimeFilter<"Airplane"> | Date | string
    airlineId?: StringFilter<"Airplane"> | string
    airline?: XOR<AirlineScalarRelationFilter, AirlineWhereInput>
    flights?: FlightListRelationFilter
  }, "id">

  export type AirplaneOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
    manufacturer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    _count?: AirplaneCountOrderByAggregateInput
    _avg?: AirplaneAvgOrderByAggregateInput
    _max?: AirplaneMaxOrderByAggregateInput
    _min?: AirplaneMinOrderByAggregateInput
    _sum?: AirplaneSumOrderByAggregateInput
  }

  export type AirplaneScalarWhereWithAggregatesInput = {
    AND?: AirplaneScalarWhereWithAggregatesInput | AirplaneScalarWhereWithAggregatesInput[]
    OR?: AirplaneScalarWhereWithAggregatesInput[]
    NOT?: AirplaneScalarWhereWithAggregatesInput | AirplaneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airplane"> | string
    model?: StringWithAggregatesFilter<"Airplane"> | string
    year?: IntWithAggregatesFilter<"Airplane"> | number
    seats?: IntWithAggregatesFilter<"Airplane"> | number
    capacity?: IntWithAggregatesFilter<"Airplane"> | number
    manufacturer?: StringWithAggregatesFilter<"Airplane"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Airplane"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airplane"> | Date | string
    airlineId?: StringWithAggregatesFilter<"Airplane"> | string
  }

  export type AirportWhereInput = {
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    id?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    code?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    lat?: FloatFilter<"Airport"> | number
    lng?: FloatFilter<"Airport"> | number
    address?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    website?: StringNullableFilter<"Airport"> | string | null
    phoneNumber?: StringNullableFilter<"Airport"> | string | null
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    countryId?: StringFilter<"Airport"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    departures?: FlightListRelationFilter
    arrivals?: FlightListRelationFilter
  }

  export type AirportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    website?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
    city?: CityOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    departures?: FlightOrderByRelationAggregateInput
    arrivals?: FlightOrderByRelationAggregateInput
    _relevance?: AirportOrderByRelevanceInput
  }

  export type AirportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    address?: string
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    name?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    lat?: FloatFilter<"Airport"> | number
    lng?: FloatFilter<"Airport"> | number
    timezone?: StringFilter<"Airport"> | string
    website?: StringNullableFilter<"Airport"> | string | null
    phoneNumber?: StringNullableFilter<"Airport"> | string | null
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    countryId?: StringFilter<"Airport"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    departures?: FlightListRelationFilter
    arrivals?: FlightListRelationFilter
  }, "id" | "code" | "address">

  export type AirportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    website?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
    _count?: AirportCountOrderByAggregateInput
    _avg?: AirportAvgOrderByAggregateInput
    _max?: AirportMaxOrderByAggregateInput
    _min?: AirportMinOrderByAggregateInput
    _sum?: AirportSumOrderByAggregateInput
  }

  export type AirportScalarWhereWithAggregatesInput = {
    AND?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    OR?: AirportScalarWhereWithAggregatesInput[]
    NOT?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airport"> | string
    name?: StringWithAggregatesFilter<"Airport"> | string
    code?: StringWithAggregatesFilter<"Airport"> | string
    cityId?: StringWithAggregatesFilter<"Airport"> | string
    lat?: FloatWithAggregatesFilter<"Airport"> | number
    lng?: FloatWithAggregatesFilter<"Airport"> | number
    address?: StringWithAggregatesFilter<"Airport"> | string
    timezone?: StringWithAggregatesFilter<"Airport"> | string
    website?: StringNullableWithAggregatesFilter<"Airport"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Airport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
    countryId?: StringWithAggregatesFilter<"Airport"> | string
  }

  export type FlightWhereInput = {
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    id?: StringFilter<"Flight"> | string
    airlineId?: StringNullableFilter<"Flight"> | string | null
    airplaneId?: StringNullableFilter<"Flight"> | string | null
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    flightDuration?: IntFilter<"Flight"> | number
    flightDistance?: IntFilter<"Flight"> | number
    fromAirportId?: StringFilter<"Flight"> | string
    toAirportId?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    flightStatus?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    airline?: XOR<AirlineNullableScalarRelationFilter, AirlineWhereInput> | null
    airplane?: XOR<AirplaneNullableScalarRelationFilter, AirplaneWhereInput> | null
    fromAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    toAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type FlightOrderByWithRelationInput = {
    id?: SortOrder
    airlineId?: SortOrderInput | SortOrder
    airplaneId?: SortOrderInput | SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flightDuration?: SortOrder
    flightDistance?: SortOrder
    fromAirportId?: SortOrder
    toAirportId?: SortOrder
    flightNumber?: SortOrder
    flightStatus?: SortOrder
    airline?: AirlineOrderByWithRelationInput
    airplane?: AirplaneOrderByWithRelationInput
    fromAirport?: AirportOrderByWithRelationInput
    toAirport?: AirportOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: FlightOrderByRelevanceInput
  }

  export type FlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flightNumber?: string
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    airlineId?: StringNullableFilter<"Flight"> | string | null
    airplaneId?: StringNullableFilter<"Flight"> | string | null
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    flightDuration?: IntFilter<"Flight"> | number
    flightDistance?: IntFilter<"Flight"> | number
    fromAirportId?: StringFilter<"Flight"> | string
    toAirportId?: StringFilter<"Flight"> | string
    flightStatus?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    airline?: XOR<AirlineNullableScalarRelationFilter, AirlineWhereInput> | null
    airplane?: XOR<AirplaneNullableScalarRelationFilter, AirplaneWhereInput> | null
    fromAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    toAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    bookings?: BookingListRelationFilter
  }, "id" | "flightNumber">

  export type FlightOrderByWithAggregationInput = {
    id?: SortOrder
    airlineId?: SortOrderInput | SortOrder
    airplaneId?: SortOrderInput | SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flightDuration?: SortOrder
    flightDistance?: SortOrder
    fromAirportId?: SortOrder
    toAirportId?: SortOrder
    flightNumber?: SortOrder
    flightStatus?: SortOrder
    _count?: FlightCountOrderByAggregateInput
    _avg?: FlightAvgOrderByAggregateInput
    _max?: FlightMaxOrderByAggregateInput
    _min?: FlightMinOrderByAggregateInput
    _sum?: FlightSumOrderByAggregateInput
  }

  export type FlightScalarWhereWithAggregatesInput = {
    AND?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    OR?: FlightScalarWhereWithAggregatesInput[]
    NOT?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flight"> | string
    airlineId?: StringNullableWithAggregatesFilter<"Flight"> | string | null
    airplaneId?: StringNullableWithAggregatesFilter<"Flight"> | string | null
    departureTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    flightDuration?: IntWithAggregatesFilter<"Flight"> | number
    flightDistance?: IntWithAggregatesFilter<"Flight"> | number
    fromAirportId?: StringWithAggregatesFilter<"Flight"> | string
    toAirportId?: StringWithAggregatesFilter<"Flight"> | string
    flightNumber?: StringWithAggregatesFilter<"Flight"> | string
    flightStatus?: EnumFlightStatusWithAggregatesFilter<"Flight"> | $Enums.FlightStatus
  }

  export type PassengerWhereInput = {
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    id?: StringFilter<"Passenger"> | string
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    email?: StringFilter<"Passenger"> | string
    phone?: StringFilter<"Passenger"> | string
    dateOfBirth?: DateTimeFilter<"Passenger"> | Date | string
    gender?: StringNullableFilter<"Passenger"> | string | null
    nationality?: StringNullableFilter<"Passenger"> | string | null
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    address?: StringNullableFilter<"Passenger"> | string | null
    emergencyContact?: StringNullableFilter<"Passenger"> | string | null
    emergencyPhone?: StringNullableFilter<"Passenger"> | string | null
    frequentFlyer?: BoolFilter<"Passenger"> | boolean
    mealPreference?: StringNullableFilter<"Passenger"> | string | null
    specialRequirements?: StringNullableFilter<"Passenger"> | string | null
    bookingDate?: DateTimeFilter<"Passenger"> | Date | string
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type PassengerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    frequentFlyer?: SortOrder
    mealPreference?: SortOrderInput | SortOrder
    specialRequirements?: SortOrderInput | SortOrder
    bookingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: PassengerOrderByRelevanceInput
  }

  export type PassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    dateOfBirth?: DateTimeFilter<"Passenger"> | Date | string
    gender?: StringNullableFilter<"Passenger"> | string | null
    nationality?: StringNullableFilter<"Passenger"> | string | null
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    address?: StringNullableFilter<"Passenger"> | string | null
    emergencyContact?: StringNullableFilter<"Passenger"> | string | null
    emergencyPhone?: StringNullableFilter<"Passenger"> | string | null
    frequentFlyer?: BoolFilter<"Passenger"> | boolean
    mealPreference?: StringNullableFilter<"Passenger"> | string | null
    specialRequirements?: StringNullableFilter<"Passenger"> | string | null
    bookingDate?: DateTimeFilter<"Passenger"> | Date | string
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id" | "email" | "phone">

  export type PassengerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyPhone?: SortOrderInput | SortOrder
    frequentFlyer?: SortOrder
    mealPreference?: SortOrderInput | SortOrder
    specialRequirements?: SortOrderInput | SortOrder
    bookingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassengerCountOrderByAggregateInput
    _max?: PassengerMaxOrderByAggregateInput
    _min?: PassengerMinOrderByAggregateInput
  }

  export type PassengerScalarWhereWithAggregatesInput = {
    AND?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    OR?: PassengerScalarWhereWithAggregatesInput[]
    NOT?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passenger"> | string
    firstName?: StringWithAggregatesFilter<"Passenger"> | string
    lastName?: StringWithAggregatesFilter<"Passenger"> | string
    email?: StringWithAggregatesFilter<"Passenger"> | string
    phone?: StringWithAggregatesFilter<"Passenger"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    gender?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    passportNumber?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    address?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    emergencyPhone?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    frequentFlyer?: BoolWithAggregatesFilter<"Passenger"> | boolean
    mealPreference?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    specialRequirements?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    bookingDate?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    passengerId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
    seatNumber?: StringFilter<"Booking"> | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    passengerClass?: EnumPassengerClassFilter<"Booking"> | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    flightId?: SortOrder
    seatNumber?: SortOrder
    bookingDate?: SortOrder
    passengerClass?: SortOrder
    bookingStatus?: SortOrder
    passenger?: PassengerOrderByWithRelationInput
    flight?: FlightOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    passengerId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
    seatNumber?: StringFilter<"Booking"> | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    passengerClass?: EnumPassengerClassFilter<"Booking"> | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    flightId?: SortOrder
    seatNumber?: SortOrder
    bookingDate?: SortOrder
    passengerClass?: SortOrder
    bookingStatus?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    passengerId?: StringWithAggregatesFilter<"Booking"> | string
    flightId?: StringWithAggregatesFilter<"Booking"> | string
    seatNumber?: StringWithAggregatesFilter<"Booking"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    passengerClass?: EnumPassengerClassWithAggregatesFilter<"Booking"> | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineCreateNestedManyWithoutCountryInput
    airports?: AirportCreateNestedManyWithoutCountryInput
    cities?: CityCreateNestedManyWithoutCountryInput
    State?: StateCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
    airports?: AirportUncheckedCreateNestedManyWithoutCountryInput
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
    State?: StateUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
    airports?: AirportUpdateManyWithoutCountryNestedInput
    cities?: CityUpdateManyWithoutCountryNestedInput
    State?: StateUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
    airports?: AirportUncheckedUpdateManyWithoutCountryNestedInput
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
    State?: StateUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    countryCode: string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
  }

  export type StateCreateInput = {
    id?: string
    name: string
    stateCode?: string | null
    country: CountryCreateNestedOneWithoutStateInput
    cities?: CityCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: string
    name: string
    stateCode?: string | null
    countryId: string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutStateNestedInput
    cities?: CityUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: string
    name: string
    stateCode?: string | null
    countryId: string
  }

  export type StateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    cityIATACode: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state?: StateCreateNestedOneWithoutCitiesInput
    country: CountryCreateNestedOneWithoutCitiesInput
    airports?: AirportCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    cityIATACode: string
    stateId?: string | null
    countryId: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airports?: AirportUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutCitiesNestedInput
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    airports?: AirportUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airports?: AirportUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    cityIATACode: string
    stateId?: string | null
    countryId: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirlineCreateInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutAirlinesInput
    planes?: AirplaneCreateNestedManyWithoutAirlineInput
    flights?: FlightCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateInput = {
    id?: string
    name: string
    countryId: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planes?: AirplaneUncheckedCreateNestedManyWithoutAirlineInput
    flights?: FlightUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    planes?: AirplaneUpdateManyWithoutAirlineNestedInput
    flights?: FlightUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planes?: AirplaneUncheckedUpdateManyWithoutAirlineNestedInput
    flights?: FlightUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineCreateManyInput = {
    id?: string
    name: string
    countryId: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirlineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirlineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirplaneCreateInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutPlanesInput
    flights?: FlightCreateNestedManyWithoutAirplaneInput
  }

  export type AirplaneUncheckedCreateInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    flights?: FlightUncheckedCreateNestedManyWithoutAirplaneInput
  }

  export type AirplaneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutPlanesNestedInput
    flights?: FlightUpdateManyWithoutAirplaneNestedInput
  }

  export type AirplaneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    flights?: FlightUncheckedUpdateManyWithoutAirplaneNestedInput
  }

  export type AirplaneCreateManyInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
  }

  export type AirplaneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirplaneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
  }

  export type AirportCreateInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutAirportsInput
    country: CountryCreateNestedOneWithoutAirportsInput
    departures?: FlightCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightCreateNestedManyWithoutToAirportInput
  }

  export type AirportUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    departures?: FlightUncheckedCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightUncheckedCreateNestedManyWithoutToAirportInput
  }

  export type AirportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    country?: CountryUpdateOneRequiredWithoutAirportsNestedInput
    departures?: FlightUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    departures?: FlightUncheckedUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUncheckedUpdateManyWithoutToAirportNestedInput
  }

  export type AirportCreateManyInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
  }

  export type AirportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightCreateInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airline?: AirlineCreateNestedOneWithoutFlightsInput
    airplane?: AirplaneCreateNestedOneWithoutFlightsInput
    fromAirport: AirportCreateNestedOneWithoutDeparturesInput
    toAirport: AirportCreateNestedOneWithoutArrivalsInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airline?: AirlineUpdateOneWithoutFlightsNestedInput
    airplane?: AirplaneUpdateOneWithoutFlightsNestedInput
    fromAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    toAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightCreateManyInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type FlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type FlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type PassengerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: string | null
    nationality?: string | null
    passportNumber?: string | null
    address?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    frequentFlyer?: boolean
    mealPreference?: string | null
    specialRequirements?: string | null
    bookingDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: string | null
    nationality?: string | null
    passportNumber?: string | null
    address?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    frequentFlyer?: boolean
    mealPreference?: string | null
    specialRequirements?: string | null
    bookingDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: string | null
    nationality?: string | null
    passportNumber?: string | null
    address?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    frequentFlyer?: boolean
    mealPreference?: string | null
    specialRequirements?: string | null
    bookingDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
    passenger: PassengerCreateNestedOneWithoutBookingsInput
    flight: FlightCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    passengerId: string
    flightId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingCreateManyInput = {
    id?: string
    passengerId: string
    flightId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AirlineListRelationFilter = {
    every?: AirlineWhereInput
    some?: AirlineWhereInput
    none?: AirlineWhereInput
  }

  export type AirportListRelationFilter = {
    every?: AirportWhereInput
    some?: AirportWhereInput
    none?: AirportWhereInput
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type StateListRelationFilter = {
    every?: StateWhereInput
    some?: StateWhereInput
    none?: StateWhereInput
  }

  export type AirlineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelevanceInput = {
    fields: CountryOrderByRelevanceFieldEnum | CountryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryCode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StateOrderByRelevanceInput = {
    fields: StateOrderByRelevanceFieldEnum | StateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StateNameCountryIdCompoundUniqueInput = {
    name: string
    countryId: string
  }

  export type StateStateCodeCountryIdCompoundUniqueInput = {
    stateCode: string
    countryId: string
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateCode?: SortOrder
    countryId?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateCode?: SortOrder
    countryId?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateCode?: SortOrder
    countryId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StateNullableScalarRelationFilter = {
    is?: StateWhereInput | null
    isNot?: StateWhereInput | null
  }

  export type CityOrderByRelevanceInput = {
    fields: CityOrderByRelevanceFieldEnum | CityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CityNameStateCountryKeyCompoundUniqueInput = {
    name: string
    stateCountryKey: string
  }

  export type CityCityIATACodeStateCountryKeyCompoundUniqueInput = {
    cityIATACode: string
    stateCountryKey: string
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityIATACode?: SortOrder
    stateId?: SortOrder
    countryId?: SortOrder
    stateCountryKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityIATACode?: SortOrder
    stateId?: SortOrder
    countryId?: SortOrder
    stateCountryKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityIATACode?: SortOrder
    stateId?: SortOrder
    countryId?: SortOrder
    stateCountryKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AirplaneListRelationFilter = {
    every?: AirplaneWhereInput
    some?: AirplaneWhereInput
    none?: AirplaneWhereInput
  }

  export type FlightListRelationFilter = {
    every?: FlightWhereInput
    some?: FlightWhereInput
    none?: FlightWhereInput
  }

  export type AirplaneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineOrderByRelevanceInput = {
    fields: AirlineOrderByRelevanceFieldEnum | AirlineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AirlineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirlineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirlineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AirlineScalarRelationFilter = {
    is?: AirlineWhereInput
    isNot?: AirlineWhereInput
  }

  export type AirplaneOrderByRelevanceInput = {
    fields: AirplaneOrderByRelevanceFieldEnum | AirplaneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AirplaneCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
    manufacturer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
  }

  export type AirplaneAvgOrderByAggregateInput = {
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
  }

  export type AirplaneMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
    manufacturer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
  }

  export type AirplaneMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
    manufacturer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
  }

  export type AirplaneSumOrderByAggregateInput = {
    year?: SortOrder
    seats?: SortOrder
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type AirportOrderByRelevanceInput = {
    fields: AirportOrderByRelevanceFieldEnum | AirportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AirportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
  }

  export type AirportAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type AirportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
  }

  export type AirportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    address?: SortOrder
    timezone?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    countryId?: SortOrder
  }

  export type AirportSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type AirlineNullableScalarRelationFilter = {
    is?: AirlineWhereInput | null
    isNot?: AirlineWhereInput | null
  }

  export type AirplaneNullableScalarRelationFilter = {
    is?: AirplaneWhereInput | null
    isNot?: AirplaneWhereInput | null
  }

  export type AirportScalarRelationFilter = {
    is?: AirportWhereInput
    isNot?: AirportWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightOrderByRelevanceInput = {
    fields: FlightOrderByRelevanceFieldEnum | FlightOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlightCountOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    airplaneId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flightDuration?: SortOrder
    flightDistance?: SortOrder
    fromAirportId?: SortOrder
    toAirportId?: SortOrder
    flightNumber?: SortOrder
    flightStatus?: SortOrder
  }

  export type FlightAvgOrderByAggregateInput = {
    flightDuration?: SortOrder
    flightDistance?: SortOrder
  }

  export type FlightMaxOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    airplaneId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flightDuration?: SortOrder
    flightDistance?: SortOrder
    fromAirportId?: SortOrder
    toAirportId?: SortOrder
    flightNumber?: SortOrder
    flightStatus?: SortOrder
  }

  export type FlightMinOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    airplaneId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flightDuration?: SortOrder
    flightDistance?: SortOrder
    fromAirportId?: SortOrder
    toAirportId?: SortOrder
    flightNumber?: SortOrder
    flightStatus?: SortOrder
  }

  export type FlightSumOrderByAggregateInput = {
    flightDuration?: SortOrder
    flightDistance?: SortOrder
  }

  export type EnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PassengerOrderByRelevanceInput = {
    fields: PassengerOrderByRelevanceFieldEnum | PassengerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PassengerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    frequentFlyer?: SortOrder
    mealPreference?: SortOrder
    specialRequirements?: SortOrder
    bookingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    frequentFlyer?: SortOrder
    mealPreference?: SortOrder
    specialRequirements?: SortOrder
    bookingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    nationality?: SortOrder
    passportNumber?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    emergencyPhone?: SortOrder
    frequentFlyer?: SortOrder
    mealPreference?: SortOrder
    specialRequirements?: SortOrder
    bookingDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPassengerClassFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerClass | EnumPassengerClassFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerClass[]
    notIn?: $Enums.PassengerClass[]
    not?: NestedEnumPassengerClassFilter<$PrismaModel> | $Enums.PassengerClass
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PassengerScalarRelationFilter = {
    is?: PassengerWhereInput
    isNot?: PassengerWhereInput
  }

  export type FlightScalarRelationFilter = {
    is?: FlightWhereInput
    isNot?: FlightWhereInput
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    flightId?: SortOrder
    seatNumber?: SortOrder
    bookingDate?: SortOrder
    passengerClass?: SortOrder
    bookingStatus?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    flightId?: SortOrder
    seatNumber?: SortOrder
    bookingDate?: SortOrder
    passengerClass?: SortOrder
    bookingStatus?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    flightId?: SortOrder
    seatNumber?: SortOrder
    bookingDate?: SortOrder
    passengerClass?: SortOrder
    bookingStatus?: SortOrder
  }

  export type EnumPassengerClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerClass | EnumPassengerClassFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerClass[]
    notIn?: $Enums.PassengerClass[]
    not?: NestedEnumPassengerClassWithAggregatesFilter<$PrismaModel> | $Enums.PassengerClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassengerClassFilter<$PrismaModel>
    _max?: NestedEnumPassengerClassFilter<$PrismaModel>
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type AirlineCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
  }

  export type AirportCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput> | AirportCreateWithoutCountryInput[] | AirportUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCountryInput | AirportCreateOrConnectWithoutCountryInput[]
    createMany?: AirportCreateManyCountryInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type CityCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type StateCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type AirlineUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
  }

  export type AirportUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput> | AirportCreateWithoutCountryInput[] | AirportUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCountryInput | AirportCreateOrConnectWithoutCountryInput[]
    createMany?: AirportCreateManyCountryInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type StateUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AirlineUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    upsert?: AirlineUpsertWithWhereUniqueWithoutCountryInput | AirlineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    set?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    disconnect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    delete?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    update?: AirlineUpdateWithWhereUniqueWithoutCountryInput | AirlineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirlineUpdateManyWithWhereWithoutCountryInput | AirlineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
  }

  export type AirportUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput> | AirportCreateWithoutCountryInput[] | AirportUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCountryInput | AirportCreateOrConnectWithoutCountryInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCountryInput | AirportUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirportCreateManyCountryInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCountryInput | AirportUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCountryInput | AirportUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type CityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type StateUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type AirlineUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    upsert?: AirlineUpsertWithWhereUniqueWithoutCountryInput | AirlineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    set?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    disconnect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    delete?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    update?: AirlineUpdateWithWhereUniqueWithoutCountryInput | AirlineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirlineUpdateManyWithWhereWithoutCountryInput | AirlineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
  }

  export type AirportUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput> | AirportCreateWithoutCountryInput[] | AirportUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCountryInput | AirportCreateOrConnectWithoutCountryInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCountryInput | AirportUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirportCreateManyCountryInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCountryInput | AirportUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCountryInput | AirportUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type StateUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutStateInput = {
    create?: XOR<CountryCreateWithoutStateInput, CountryUncheckedCreateWithoutStateInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStateInput
    connect?: CountryWhereUniqueInput
  }

  export type CityCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CountryUpdateOneRequiredWithoutStateNestedInput = {
    create?: XOR<CountryCreateWithoutStateInput, CountryUncheckedCreateWithoutStateInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStateInput
    upsert?: CountryUpsertWithoutStateInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStateInput, CountryUpdateWithoutStateInput>, CountryUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutCitiesInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    connect?: StateWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutCitiesInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    connect?: CountryWhereUniqueInput
  }

  export type AirportCreateNestedManyWithoutCityInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type AirportUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StateUpdateOneWithoutCitiesNestedInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    upsert?: StateUpsertWithoutCitiesInput
    disconnect?: StateWhereInput | boolean
    delete?: StateWhereInput | boolean
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutCitiesInput, StateUpdateWithoutCitiesInput>, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type CountryUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    upsert?: CountryUpsertWithoutCitiesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCitiesInput, CountryUpdateWithoutCitiesInput>, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type AirportUpdateManyWithoutCityNestedInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCityInput | AirportUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCityInput | AirportUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCityInput | AirportUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type AirportUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCityInput | AirportUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCityInput | AirportUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCityInput | AirportUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutAirlinesInput = {
    create?: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirlinesInput
    connect?: CountryWhereUniqueInput
  }

  export type AirplaneCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput> | AirplaneCreateWithoutAirlineInput[] | AirplaneUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirplaneCreateOrConnectWithoutAirlineInput | AirplaneCreateOrConnectWithoutAirlineInput[]
    createMany?: AirplaneCreateManyAirlineInputEnvelope
    connect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
  }

  export type FlightCreateNestedManyWithoutAirlineInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type AirplaneUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput> | AirplaneCreateWithoutAirlineInput[] | AirplaneUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirplaneCreateOrConnectWithoutAirlineInput | AirplaneCreateOrConnectWithoutAirlineInput[]
    createMany?: AirplaneCreateManyAirlineInputEnvelope
    connect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutAirlinesNestedInput = {
    create?: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirlinesInput
    upsert?: CountryUpsertWithoutAirlinesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutAirlinesInput, CountryUpdateWithoutAirlinesInput>, CountryUncheckedUpdateWithoutAirlinesInput>
  }

  export type AirplaneUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput> | AirplaneCreateWithoutAirlineInput[] | AirplaneUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirplaneCreateOrConnectWithoutAirlineInput | AirplaneCreateOrConnectWithoutAirlineInput[]
    upsert?: AirplaneUpsertWithWhereUniqueWithoutAirlineInput | AirplaneUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirplaneCreateManyAirlineInputEnvelope
    set?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    disconnect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    delete?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    connect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    update?: AirplaneUpdateWithWhereUniqueWithoutAirlineInput | AirplaneUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirplaneUpdateManyWithWhereWithoutAirlineInput | AirplaneUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirplaneScalarWhereInput | AirplaneScalarWhereInput[]
  }

  export type FlightUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirlineInput | FlightUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirlineInput | FlightUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirlineInput | FlightUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type AirplaneUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput> | AirplaneCreateWithoutAirlineInput[] | AirplaneUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirplaneCreateOrConnectWithoutAirlineInput | AirplaneCreateOrConnectWithoutAirlineInput[]
    upsert?: AirplaneUpsertWithWhereUniqueWithoutAirlineInput | AirplaneUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirplaneCreateManyAirlineInputEnvelope
    set?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    disconnect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    delete?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    connect?: AirplaneWhereUniqueInput | AirplaneWhereUniqueInput[]
    update?: AirplaneUpdateWithWhereUniqueWithoutAirlineInput | AirplaneUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirplaneUpdateManyWithWhereWithoutAirlineInput | AirplaneUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirplaneScalarWhereInput | AirplaneScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirlineInput | FlightUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirlineInput | FlightUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirlineInput | FlightUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type AirlineCreateNestedOneWithoutPlanesInput = {
    create?: XOR<AirlineCreateWithoutPlanesInput, AirlineUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutPlanesInput
    connect?: AirlineWhereUniqueInput
  }

  export type FlightCreateNestedManyWithoutAirplaneInput = {
    create?: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput> | FlightCreateWithoutAirplaneInput[] | FlightUncheckedCreateWithoutAirplaneInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirplaneInput | FlightCreateOrConnectWithoutAirplaneInput[]
    createMany?: FlightCreateManyAirplaneInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutAirplaneInput = {
    create?: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput> | FlightCreateWithoutAirplaneInput[] | FlightUncheckedCreateWithoutAirplaneInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirplaneInput | FlightCreateOrConnectWithoutAirplaneInput[]
    createMany?: FlightCreateManyAirplaneInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AirlineUpdateOneRequiredWithoutPlanesNestedInput = {
    create?: XOR<AirlineCreateWithoutPlanesInput, AirlineUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutPlanesInput
    upsert?: AirlineUpsertWithoutPlanesInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutPlanesInput, AirlineUpdateWithoutPlanesInput>, AirlineUncheckedUpdateWithoutPlanesInput>
  }

  export type FlightUpdateManyWithoutAirplaneNestedInput = {
    create?: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput> | FlightCreateWithoutAirplaneInput[] | FlightUncheckedCreateWithoutAirplaneInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirplaneInput | FlightCreateOrConnectWithoutAirplaneInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirplaneInput | FlightUpsertWithWhereUniqueWithoutAirplaneInput[]
    createMany?: FlightCreateManyAirplaneInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirplaneInput | FlightUpdateWithWhereUniqueWithoutAirplaneInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirplaneInput | FlightUpdateManyWithWhereWithoutAirplaneInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutAirplaneNestedInput = {
    create?: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput> | FlightCreateWithoutAirplaneInput[] | FlightUncheckedCreateWithoutAirplaneInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirplaneInput | FlightCreateOrConnectWithoutAirplaneInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirplaneInput | FlightUpsertWithWhereUniqueWithoutAirplaneInput[]
    createMany?: FlightCreateManyAirplaneInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirplaneInput | FlightUpdateWithWhereUniqueWithoutAirplaneInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirplaneInput | FlightUpdateManyWithWhereWithoutAirplaneInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutAirportsInput = {
    create?: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CityCreateOrConnectWithoutAirportsInput
    connect?: CityWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutAirportsInput = {
    create?: XOR<CountryCreateWithoutAirportsInput, CountryUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirportsInput
    connect?: CountryWhereUniqueInput
  }

  export type FlightCreateNestedManyWithoutFromAirportInput = {
    create?: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput> | FlightCreateWithoutFromAirportInput[] | FlightUncheckedCreateWithoutFromAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutFromAirportInput | FlightCreateOrConnectWithoutFromAirportInput[]
    createMany?: FlightCreateManyFromAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightCreateNestedManyWithoutToAirportInput = {
    create?: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput> | FlightCreateWithoutToAirportInput[] | FlightUncheckedCreateWithoutToAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutToAirportInput | FlightCreateOrConnectWithoutToAirportInput[]
    createMany?: FlightCreateManyToAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutFromAirportInput = {
    create?: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput> | FlightCreateWithoutFromAirportInput[] | FlightUncheckedCreateWithoutFromAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutFromAirportInput | FlightCreateOrConnectWithoutFromAirportInput[]
    createMany?: FlightCreateManyFromAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutToAirportInput = {
    create?: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput> | FlightCreateWithoutToAirportInput[] | FlightUncheckedCreateWithoutToAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutToAirportInput | FlightCreateOrConnectWithoutToAirportInput[]
    createMany?: FlightCreateManyToAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CityUpdateOneRequiredWithoutAirportsNestedInput = {
    create?: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CityCreateOrConnectWithoutAirportsInput
    upsert?: CityUpsertWithoutAirportsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAirportsInput, CityUpdateWithoutAirportsInput>, CityUncheckedUpdateWithoutAirportsInput>
  }

  export type CountryUpdateOneRequiredWithoutAirportsNestedInput = {
    create?: XOR<CountryCreateWithoutAirportsInput, CountryUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirportsInput
    upsert?: CountryUpsertWithoutAirportsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutAirportsInput, CountryUpdateWithoutAirportsInput>, CountryUncheckedUpdateWithoutAirportsInput>
  }

  export type FlightUpdateManyWithoutFromAirportNestedInput = {
    create?: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput> | FlightCreateWithoutFromAirportInput[] | FlightUncheckedCreateWithoutFromAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutFromAirportInput | FlightCreateOrConnectWithoutFromAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutFromAirportInput | FlightUpsertWithWhereUniqueWithoutFromAirportInput[]
    createMany?: FlightCreateManyFromAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutFromAirportInput | FlightUpdateWithWhereUniqueWithoutFromAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutFromAirportInput | FlightUpdateManyWithWhereWithoutFromAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUpdateManyWithoutToAirportNestedInput = {
    create?: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput> | FlightCreateWithoutToAirportInput[] | FlightUncheckedCreateWithoutToAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutToAirportInput | FlightCreateOrConnectWithoutToAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutToAirportInput | FlightUpsertWithWhereUniqueWithoutToAirportInput[]
    createMany?: FlightCreateManyToAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutToAirportInput | FlightUpdateWithWhereUniqueWithoutToAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutToAirportInput | FlightUpdateManyWithWhereWithoutToAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutFromAirportNestedInput = {
    create?: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput> | FlightCreateWithoutFromAirportInput[] | FlightUncheckedCreateWithoutFromAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutFromAirportInput | FlightCreateOrConnectWithoutFromAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutFromAirportInput | FlightUpsertWithWhereUniqueWithoutFromAirportInput[]
    createMany?: FlightCreateManyFromAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutFromAirportInput | FlightUpdateWithWhereUniqueWithoutFromAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutFromAirportInput | FlightUpdateManyWithWhereWithoutFromAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutToAirportNestedInput = {
    create?: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput> | FlightCreateWithoutToAirportInput[] | FlightUncheckedCreateWithoutToAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutToAirportInput | FlightCreateOrConnectWithoutToAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutToAirportInput | FlightUpsertWithWhereUniqueWithoutToAirportInput[]
    createMany?: FlightCreateManyToAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutToAirportInput | FlightUpdateWithWhereUniqueWithoutToAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutToAirportInput | FlightUpdateManyWithWhereWithoutToAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type AirlineCreateNestedOneWithoutFlightsInput = {
    create?: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutFlightsInput
    connect?: AirlineWhereUniqueInput
  }

  export type AirplaneCreateNestedOneWithoutFlightsInput = {
    create?: XOR<AirplaneCreateWithoutFlightsInput, AirplaneUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirplaneCreateOrConnectWithoutFlightsInput
    connect?: AirplaneWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutDeparturesInput = {
    create?: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDeparturesInput
    connect?: AirportWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutArrivalsInput = {
    create?: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalsInput
    connect?: AirportWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutFlightInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutFlightInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumFlightStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlightStatus
  }

  export type AirlineUpdateOneWithoutFlightsNestedInput = {
    create?: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutFlightsInput
    upsert?: AirlineUpsertWithoutFlightsInput
    disconnect?: AirlineWhereInput | boolean
    delete?: AirlineWhereInput | boolean
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutFlightsInput, AirlineUpdateWithoutFlightsInput>, AirlineUncheckedUpdateWithoutFlightsInput>
  }

  export type AirplaneUpdateOneWithoutFlightsNestedInput = {
    create?: XOR<AirplaneCreateWithoutFlightsInput, AirplaneUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirplaneCreateOrConnectWithoutFlightsInput
    upsert?: AirplaneUpsertWithoutFlightsInput
    disconnect?: AirplaneWhereInput | boolean
    delete?: AirplaneWhereInput | boolean
    connect?: AirplaneWhereUniqueInput
    update?: XOR<XOR<AirplaneUpdateToOneWithWhereWithoutFlightsInput, AirplaneUpdateWithoutFlightsInput>, AirplaneUncheckedUpdateWithoutFlightsInput>
  }

  export type AirportUpdateOneRequiredWithoutDeparturesNestedInput = {
    create?: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDeparturesInput
    upsert?: AirportUpsertWithoutDeparturesInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutDeparturesInput, AirportUpdateWithoutDeparturesInput>, AirportUncheckedUpdateWithoutDeparturesInput>
  }

  export type AirportUpdateOneRequiredWithoutArrivalsNestedInput = {
    create?: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalsInput
    upsert?: AirportUpsertWithoutArrivalsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutArrivalsInput, AirportUpdateWithoutArrivalsInput>, AirportUncheckedUpdateWithoutArrivalsInput>
  }

  export type BookingUpdateManyWithoutFlightNestedInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlightInput | BookingUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlightInput | BookingUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlightInput | BookingUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlightInput | BookingUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlightInput | BookingUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlightInput | BookingUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput> | BookingCreateWithoutPassengerInput[] | BookingUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPassengerInput | BookingCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPassengerInput | BookingUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingCreateManyPassengerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPassengerInput | BookingUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPassengerInput | BookingUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PassengerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
  }

  export type FlightCreateNestedOneWithoutBookingsInput = {
    create?: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutBookingsInput
    connect?: FlightWhereUniqueInput
  }

  export type EnumPassengerClassFieldUpdateOperationsInput = {
    set?: $Enums.PassengerClass
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type PassengerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    upsert?: PassengerUpsertWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutBookingsInput, PassengerUpdateWithoutBookingsInput>, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type FlightUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutBookingsInput
    upsert?: FlightUpsertWithoutBookingsInput
    connect?: FlightWhereUniqueInput
    update?: XOR<XOR<FlightUpdateToOneWithWhereWithoutBookingsInput, FlightUpdateWithoutBookingsInput>, FlightUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPassengerClassFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerClass | EnumPassengerClassFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerClass[]
    notIn?: $Enums.PassengerClass[]
    not?: NestedEnumPassengerClassFilter<$PrismaModel> | $Enums.PassengerClass
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPassengerClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PassengerClass | EnumPassengerClassFieldRefInput<$PrismaModel>
    in?: $Enums.PassengerClass[]
    notIn?: $Enums.PassengerClass[]
    not?: NestedEnumPassengerClassWithAggregatesFilter<$PrismaModel> | $Enums.PassengerClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPassengerClassFilter<$PrismaModel>
    _max?: NestedEnumPassengerClassFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type AirlineCreateWithoutCountryInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planes?: AirplaneCreateNestedManyWithoutAirlineInput
    flights?: FlightCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planes?: AirplaneUncheckedCreateNestedManyWithoutAirlineInput
    flights?: FlightUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput>
  }

  export type AirlineCreateManyCountryInputEnvelope = {
    data: AirlineCreateManyCountryInput | AirlineCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type AirportCreateWithoutCountryInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutAirportsInput
    departures?: FlightCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightCreateNestedManyWithoutToAirportInput
  }

  export type AirportUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    departures?: FlightUncheckedCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightUncheckedCreateNestedManyWithoutToAirportInput
  }

  export type AirportCreateOrConnectWithoutCountryInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput>
  }

  export type AirportCreateManyCountryInputEnvelope = {
    data: AirportCreateManyCountryInput | AirportCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CityCreateWithoutCountryInput = {
    id?: string
    name: string
    cityIATACode: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state?: StateCreateNestedOneWithoutCitiesInput
    airports?: AirportCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    cityIATACode: string
    stateId?: string | null
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airports?: AirportUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCountryInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityCreateManyCountryInputEnvelope = {
    data: CityCreateManyCountryInput | CityCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type StateCreateWithoutCountryInput = {
    id?: string
    name: string
    stateCode?: string | null
    cities?: CityCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    stateCode?: string | null
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCountryInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateCreateManyCountryInputEnvelope = {
    data: StateCreateManyCountryInput | StateCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type AirlineUpsertWithWhereUniqueWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    update: XOR<AirlineUpdateWithoutCountryInput, AirlineUncheckedUpdateWithoutCountryInput>
    create: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput>
  }

  export type AirlineUpdateWithWhereUniqueWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    data: XOR<AirlineUpdateWithoutCountryInput, AirlineUncheckedUpdateWithoutCountryInput>
  }

  export type AirlineUpdateManyWithWhereWithoutCountryInput = {
    where: AirlineScalarWhereInput
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyWithoutCountryInput>
  }

  export type AirlineScalarWhereInput = {
    AND?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
    OR?: AirlineScalarWhereInput[]
    NOT?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
    id?: StringFilter<"Airline"> | string
    name?: StringFilter<"Airline"> | string
    countryId?: StringFilter<"Airline"> | string
    logo?: StringFilter<"Airline"> | string
    createdAt?: DateTimeFilter<"Airline"> | Date | string
    updatedAt?: DateTimeFilter<"Airline"> | Date | string
  }

  export type AirportUpsertWithWhereUniqueWithoutCountryInput = {
    where: AirportWhereUniqueInput
    update: XOR<AirportUpdateWithoutCountryInput, AirportUncheckedUpdateWithoutCountryInput>
    create: XOR<AirportCreateWithoutCountryInput, AirportUncheckedCreateWithoutCountryInput>
  }

  export type AirportUpdateWithWhereUniqueWithoutCountryInput = {
    where: AirportWhereUniqueInput
    data: XOR<AirportUpdateWithoutCountryInput, AirportUncheckedUpdateWithoutCountryInput>
  }

  export type AirportUpdateManyWithWhereWithoutCountryInput = {
    where: AirportScalarWhereInput
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyWithoutCountryInput>
  }

  export type AirportScalarWhereInput = {
    AND?: AirportScalarWhereInput | AirportScalarWhereInput[]
    OR?: AirportScalarWhereInput[]
    NOT?: AirportScalarWhereInput | AirportScalarWhereInput[]
    id?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    code?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    lat?: FloatFilter<"Airport"> | number
    lng?: FloatFilter<"Airport"> | number
    address?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    website?: StringNullableFilter<"Airport"> | string | null
    phoneNumber?: StringNullableFilter<"Airport"> | string | null
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    countryId?: StringFilter<"Airport"> | string
  }

  export type CityUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
  }

  export type CityUpdateManyWithWhereWithoutCountryInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCountryInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    cityIATACode?: StringFilter<"City"> | string
    stateId?: StringNullableFilter<"City"> | string | null
    countryId?: StringFilter<"City"> | string
    stateCountryKey?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
  }

  export type StateUpsertWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    update: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateUpdateWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    data: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
  }

  export type StateUpdateManyWithWhereWithoutCountryInput = {
    where: StateScalarWhereInput
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyWithoutCountryInput>
  }

  export type StateScalarWhereInput = {
    AND?: StateScalarWhereInput | StateScalarWhereInput[]
    OR?: StateScalarWhereInput[]
    NOT?: StateScalarWhereInput | StateScalarWhereInput[]
    id?: StringFilter<"State"> | string
    name?: StringFilter<"State"> | string
    stateCode?: StringNullableFilter<"State"> | string | null
    countryId?: StringFilter<"State"> | string
  }

  export type CountryCreateWithoutStateInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineCreateNestedManyWithoutCountryInput
    airports?: AirportCreateNestedManyWithoutCountryInput
    cities?: CityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
    airports?: AirportUncheckedCreateNestedManyWithoutCountryInput
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutStateInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStateInput, CountryUncheckedCreateWithoutStateInput>
  }

  export type CityCreateWithoutStateInput = {
    id?: string
    name: string
    cityIATACode: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutCitiesInput
    airports?: AirportCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStateInput = {
    id?: string
    name: string
    cityIATACode: string
    countryId: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airports?: AirportUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStateInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityCreateManyStateInputEnvelope = {
    data: CityCreateManyStateInput | CityCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutStateInput = {
    update: XOR<CountryUpdateWithoutStateInput, CountryUncheckedUpdateWithoutStateInput>
    create: XOR<CountryCreateWithoutStateInput, CountryUncheckedCreateWithoutStateInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStateInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStateInput, CountryUncheckedUpdateWithoutStateInput>
  }

  export type CountryUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
    airports?: AirportUpdateManyWithoutCountryNestedInput
    cities?: CityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
    airports?: AirportUncheckedUpdateManyWithoutCountryNestedInput
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithWhereWithoutStateInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutStateInput>
  }

  export type StateCreateWithoutCitiesInput = {
    id?: string
    name: string
    stateCode?: string | null
    country: CountryCreateNestedOneWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    stateCode?: string | null
    countryId: string
  }

  export type StateCreateOrConnectWithoutCitiesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
  }

  export type CountryCreateWithoutCitiesInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineCreateNestedManyWithoutCountryInput
    airports?: AirportCreateNestedManyWithoutCountryInput
    State?: StateCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
    airports?: AirportUncheckedCreateNestedManyWithoutCountryInput
    State?: StateUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutCitiesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
  }

  export type AirportCreateWithoutCityInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutAirportsInput
    departures?: FlightCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightCreateNestedManyWithoutToAirportInput
  }

  export type AirportUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    departures?: FlightUncheckedCreateNestedManyWithoutFromAirportInput
    arrivals?: FlightUncheckedCreateNestedManyWithoutToAirportInput
  }

  export type AirportCreateOrConnectWithoutCityInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput>
  }

  export type AirportCreateManyCityInputEnvelope = {
    data: AirportCreateManyCityInput | AirportCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutCitiesInput = {
    update: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutCitiesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type StateUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpsertWithoutCitiesInput = {
    update: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCitiesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type CountryUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
    airports?: AirportUpdateManyWithoutCountryNestedInput
    State?: StateUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
    airports?: AirportUncheckedUpdateManyWithoutCountryNestedInput
    State?: StateUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type AirportUpsertWithWhereUniqueWithoutCityInput = {
    where: AirportWhereUniqueInput
    update: XOR<AirportUpdateWithoutCityInput, AirportUncheckedUpdateWithoutCityInput>
    create: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput>
  }

  export type AirportUpdateWithWhereUniqueWithoutCityInput = {
    where: AirportWhereUniqueInput
    data: XOR<AirportUpdateWithoutCityInput, AirportUncheckedUpdateWithoutCityInput>
  }

  export type AirportUpdateManyWithWhereWithoutCityInput = {
    where: AirportScalarWhereInput
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyWithoutCityInput>
  }

  export type CountryCreateWithoutAirlinesInput = {
    id?: string
    name: string
    countryCode: string
    airports?: AirportCreateNestedManyWithoutCountryInput
    cities?: CityCreateNestedManyWithoutCountryInput
    State?: StateCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutAirlinesInput = {
    id?: string
    name: string
    countryCode: string
    airports?: AirportUncheckedCreateNestedManyWithoutCountryInput
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
    State?: StateUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutAirlinesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
  }

  export type AirplaneCreateWithoutAirlineInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightCreateNestedManyWithoutAirplaneInput
  }

  export type AirplaneUncheckedCreateWithoutAirlineInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightUncheckedCreateNestedManyWithoutAirplaneInput
  }

  export type AirplaneCreateOrConnectWithoutAirlineInput = {
    where: AirplaneWhereUniqueInput
    create: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput>
  }

  export type AirplaneCreateManyAirlineInputEnvelope = {
    data: AirplaneCreateManyAirlineInput | AirplaneCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type FlightCreateWithoutAirlineInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airplane?: AirplaneCreateNestedOneWithoutFlightsInput
    fromAirport: AirportCreateNestedOneWithoutDeparturesInput
    toAirport: AirportCreateNestedOneWithoutArrivalsInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutAirlineInput = {
    id?: string
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput>
  }

  export type FlightCreateManyAirlineInputEnvelope = {
    data: FlightCreateManyAirlineInput | FlightCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutAirlinesInput = {
    update: XOR<CountryUpdateWithoutAirlinesInput, CountryUncheckedUpdateWithoutAirlinesInput>
    create: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutAirlinesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutAirlinesInput, CountryUncheckedUpdateWithoutAirlinesInput>
  }

  export type CountryUpdateWithoutAirlinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airports?: AirportUpdateManyWithoutCountryNestedInput
    cities?: CityUpdateManyWithoutCountryNestedInput
    State?: StateUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutAirlinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airports?: AirportUncheckedUpdateManyWithoutCountryNestedInput
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
    State?: StateUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type AirplaneUpsertWithWhereUniqueWithoutAirlineInput = {
    where: AirplaneWhereUniqueInput
    update: XOR<AirplaneUpdateWithoutAirlineInput, AirplaneUncheckedUpdateWithoutAirlineInput>
    create: XOR<AirplaneCreateWithoutAirlineInput, AirplaneUncheckedCreateWithoutAirlineInput>
  }

  export type AirplaneUpdateWithWhereUniqueWithoutAirlineInput = {
    where: AirplaneWhereUniqueInput
    data: XOR<AirplaneUpdateWithoutAirlineInput, AirplaneUncheckedUpdateWithoutAirlineInput>
  }

  export type AirplaneUpdateManyWithWhereWithoutAirlineInput = {
    where: AirplaneScalarWhereInput
    data: XOR<AirplaneUpdateManyMutationInput, AirplaneUncheckedUpdateManyWithoutAirlineInput>
  }

  export type AirplaneScalarWhereInput = {
    AND?: AirplaneScalarWhereInput | AirplaneScalarWhereInput[]
    OR?: AirplaneScalarWhereInput[]
    NOT?: AirplaneScalarWhereInput | AirplaneScalarWhereInput[]
    id?: StringFilter<"Airplane"> | string
    model?: StringFilter<"Airplane"> | string
    year?: IntFilter<"Airplane"> | number
    seats?: IntFilter<"Airplane"> | number
    capacity?: IntFilter<"Airplane"> | number
    manufacturer?: StringFilter<"Airplane"> | string
    createdAt?: DateTimeFilter<"Airplane"> | Date | string
    updatedAt?: DateTimeFilter<"Airplane"> | Date | string
    airlineId?: StringFilter<"Airplane"> | string
  }

  export type FlightUpsertWithWhereUniqueWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutAirlineInput, FlightUncheckedUpdateWithoutAirlineInput>
    create: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutAirlineInput, FlightUncheckedUpdateWithoutAirlineInput>
  }

  export type FlightUpdateManyWithWhereWithoutAirlineInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutAirlineInput>
  }

  export type FlightScalarWhereInput = {
    AND?: FlightScalarWhereInput | FlightScalarWhereInput[]
    OR?: FlightScalarWhereInput[]
    NOT?: FlightScalarWhereInput | FlightScalarWhereInput[]
    id?: StringFilter<"Flight"> | string
    airlineId?: StringNullableFilter<"Flight"> | string | null
    airplaneId?: StringNullableFilter<"Flight"> | string | null
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    flightDuration?: IntFilter<"Flight"> | number
    flightDistance?: IntFilter<"Flight"> | number
    fromAirportId?: StringFilter<"Flight"> | string
    toAirportId?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    flightStatus?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
  }

  export type AirlineCreateWithoutPlanesInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutAirlinesInput
    flights?: FlightCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutPlanesInput = {
    id?: string
    name: string
    countryId: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutPlanesInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutPlanesInput, AirlineUncheckedCreateWithoutPlanesInput>
  }

  export type FlightCreateWithoutAirplaneInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airline?: AirlineCreateNestedOneWithoutFlightsInput
    fromAirport: AirportCreateNestedOneWithoutDeparturesInput
    toAirport: AirportCreateNestedOneWithoutArrivalsInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutAirplaneInput = {
    id?: string
    airlineId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutAirplaneInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput>
  }

  export type FlightCreateManyAirplaneInputEnvelope = {
    data: FlightCreateManyAirplaneInput | FlightCreateManyAirplaneInput[]
    skipDuplicates?: boolean
  }

  export type AirlineUpsertWithoutPlanesInput = {
    update: XOR<AirlineUpdateWithoutPlanesInput, AirlineUncheckedUpdateWithoutPlanesInput>
    create: XOR<AirlineCreateWithoutPlanesInput, AirlineUncheckedCreateWithoutPlanesInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutPlanesInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutPlanesInput, AirlineUncheckedUpdateWithoutPlanesInput>
  }

  export type AirlineUpdateWithoutPlanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    flights?: FlightUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutPlanesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type FlightUpsertWithWhereUniqueWithoutAirplaneInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutAirplaneInput, FlightUncheckedUpdateWithoutAirplaneInput>
    create: XOR<FlightCreateWithoutAirplaneInput, FlightUncheckedCreateWithoutAirplaneInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutAirplaneInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutAirplaneInput, FlightUncheckedUpdateWithoutAirplaneInput>
  }

  export type FlightUpdateManyWithWhereWithoutAirplaneInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutAirplaneInput>
  }

  export type CityCreateWithoutAirportsInput = {
    id?: string
    name: string
    cityIATACode: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    state?: StateCreateNestedOneWithoutCitiesInput
    country: CountryCreateNestedOneWithoutCitiesInput
  }

  export type CityUncheckedCreateWithoutAirportsInput = {
    id?: string
    name: string
    cityIATACode: string
    stateId?: string | null
    countryId: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityCreateOrConnectWithoutAirportsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
  }

  export type CountryCreateWithoutAirportsInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineCreateNestedManyWithoutCountryInput
    cities?: CityCreateNestedManyWithoutCountryInput
    State?: StateCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutAirportsInput = {
    id?: string
    name: string
    countryCode: string
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
    State?: StateUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutAirportsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutAirportsInput, CountryUncheckedCreateWithoutAirportsInput>
  }

  export type FlightCreateWithoutFromAirportInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airline?: AirlineCreateNestedOneWithoutFlightsInput
    airplane?: AirplaneCreateNestedOneWithoutFlightsInput
    toAirport: AirportCreateNestedOneWithoutArrivalsInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutFromAirportInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutFromAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput>
  }

  export type FlightCreateManyFromAirportInputEnvelope = {
    data: FlightCreateManyFromAirportInput | FlightCreateManyFromAirportInput[]
    skipDuplicates?: boolean
  }

  export type FlightCreateWithoutToAirportInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airline?: AirlineCreateNestedOneWithoutFlightsInput
    airplane?: AirplaneCreateNestedOneWithoutFlightsInput
    fromAirport: AirportCreateNestedOneWithoutDeparturesInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutToAirportInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutToAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput>
  }

  export type FlightCreateManyToAirportInputEnvelope = {
    data: FlightCreateManyToAirportInput | FlightCreateManyToAirportInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutAirportsInput = {
    update: XOR<CityUpdateWithoutAirportsInput, CityUncheckedUpdateWithoutAirportsInput>
    create: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAirportsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAirportsInput, CityUncheckedUpdateWithoutAirportsInput>
  }

  export type CityUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutCitiesNestedInput
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type CityUncheckedUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUpsertWithoutAirportsInput = {
    update: XOR<CountryUpdateWithoutAirportsInput, CountryUncheckedUpdateWithoutAirportsInput>
    create: XOR<CountryCreateWithoutAirportsInput, CountryUncheckedCreateWithoutAirportsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutAirportsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutAirportsInput, CountryUncheckedUpdateWithoutAirportsInput>
  }

  export type CountryUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
    cities?: CityUpdateManyWithoutCountryNestedInput
    State?: StateUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
    State?: StateUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type FlightUpsertWithWhereUniqueWithoutFromAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutFromAirportInput, FlightUncheckedUpdateWithoutFromAirportInput>
    create: XOR<FlightCreateWithoutFromAirportInput, FlightUncheckedCreateWithoutFromAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutFromAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutFromAirportInput, FlightUncheckedUpdateWithoutFromAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutFromAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutFromAirportInput>
  }

  export type FlightUpsertWithWhereUniqueWithoutToAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutToAirportInput, FlightUncheckedUpdateWithoutToAirportInput>
    create: XOR<FlightCreateWithoutToAirportInput, FlightUncheckedCreateWithoutToAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutToAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutToAirportInput, FlightUncheckedUpdateWithoutToAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutToAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutToAirportInput>
  }

  export type AirlineCreateWithoutFlightsInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutAirlinesInput
    planes?: AirplaneCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutFlightsInput = {
    id?: string
    name: string
    countryId: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    planes?: AirplaneUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutFlightsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
  }

  export type AirplaneCreateWithoutFlightsInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutPlanesInput
  }

  export type AirplaneUncheckedCreateWithoutFlightsInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
  }

  export type AirplaneCreateOrConnectWithoutFlightsInput = {
    where: AirplaneWhereUniqueInput
    create: XOR<AirplaneCreateWithoutFlightsInput, AirplaneUncheckedCreateWithoutFlightsInput>
  }

  export type AirportCreateWithoutDeparturesInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutAirportsInput
    country: CountryCreateNestedOneWithoutAirportsInput
    arrivals?: FlightCreateNestedManyWithoutToAirportInput
  }

  export type AirportUncheckedCreateWithoutDeparturesInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    arrivals?: FlightUncheckedCreateNestedManyWithoutToAirportInput
  }

  export type AirportCreateOrConnectWithoutDeparturesInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
  }

  export type AirportCreateWithoutArrivalsInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutAirportsInput
    country: CountryCreateNestedOneWithoutAirportsInput
    departures?: FlightCreateNestedManyWithoutFromAirportInput
  }

  export type AirportUncheckedCreateWithoutArrivalsInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
    departures?: FlightUncheckedCreateNestedManyWithoutFromAirportInput
  }

  export type AirportCreateOrConnectWithoutArrivalsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
  }

  export type BookingCreateWithoutFlightInput = {
    id?: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
    passenger: PassengerCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutFlightInput = {
    id?: string
    passengerId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingCreateOrConnectWithoutFlightInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput>
  }

  export type BookingCreateManyFlightInputEnvelope = {
    data: BookingCreateManyFlightInput | BookingCreateManyFlightInput[]
    skipDuplicates?: boolean
  }

  export type AirlineUpsertWithoutFlightsInput = {
    update: XOR<AirlineUpdateWithoutFlightsInput, AirlineUncheckedUpdateWithoutFlightsInput>
    create: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutFlightsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutFlightsInput, AirlineUncheckedUpdateWithoutFlightsInput>
  }

  export type AirlineUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    planes?: AirplaneUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planes?: AirplaneUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirplaneUpsertWithoutFlightsInput = {
    update: XOR<AirplaneUpdateWithoutFlightsInput, AirplaneUncheckedUpdateWithoutFlightsInput>
    create: XOR<AirplaneCreateWithoutFlightsInput, AirplaneUncheckedCreateWithoutFlightsInput>
    where?: AirplaneWhereInput
  }

  export type AirplaneUpdateToOneWithWhereWithoutFlightsInput = {
    where?: AirplaneWhereInput
    data: XOR<AirplaneUpdateWithoutFlightsInput, AirplaneUncheckedUpdateWithoutFlightsInput>
  }

  export type AirplaneUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutPlanesNestedInput
  }

  export type AirplaneUncheckedUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
  }

  export type AirportUpsertWithoutDeparturesInput = {
    update: XOR<AirportUpdateWithoutDeparturesInput, AirportUncheckedUpdateWithoutDeparturesInput>
    create: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutDeparturesInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutDeparturesInput, AirportUncheckedUpdateWithoutDeparturesInput>
  }

  export type AirportUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    country?: CountryUpdateOneRequiredWithoutAirportsNestedInput
    arrivals?: FlightUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    arrivals?: FlightUncheckedUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUpsertWithoutArrivalsInput = {
    update: XOR<AirportUpdateWithoutArrivalsInput, AirportUncheckedUpdateWithoutArrivalsInput>
    create: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutArrivalsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutArrivalsInput, AirportUncheckedUpdateWithoutArrivalsInput>
  }

  export type AirportUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    country?: CountryUpdateOneRequiredWithoutAirportsNestedInput
    departures?: FlightUpdateManyWithoutFromAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    departures?: FlightUncheckedUpdateManyWithoutFromAirportNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutFlightInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutFlightInput, BookingUncheckedUpdateWithoutFlightInput>
    create: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutFlightInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutFlightInput, BookingUncheckedUpdateWithoutFlightInput>
  }

  export type BookingUpdateManyWithWhereWithoutFlightInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutFlightInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    passengerId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
    seatNumber?: StringFilter<"Booking"> | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    passengerClass?: EnumPassengerClassFilter<"Booking"> | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
  }

  export type BookingCreateWithoutPassengerInput = {
    id?: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
    flight: FlightCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPassengerInput = {
    id?: string
    flightId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingCreateOrConnectWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingCreateManyPassengerInputEnvelope = {
    data: BookingCreateManyPassengerInput | BookingCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
    create: XOR<BookingCreateWithoutPassengerInput, BookingUncheckedCreateWithoutPassengerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPassengerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPassengerInput, BookingUncheckedUpdateWithoutPassengerInput>
  }

  export type BookingUpdateManyWithWhereWithoutPassengerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPassengerInput>
  }

  export type PassengerCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: string | null
    nationality?: string | null
    passportNumber?: string | null
    address?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    frequentFlyer?: boolean
    mealPreference?: string | null
    specialRequirements?: string | null
    bookingDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUncheckedCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: string | null
    nationality?: string | null
    passportNumber?: string | null
    address?: string | null
    emergencyContact?: string | null
    emergencyPhone?: string | null
    frequentFlyer?: boolean
    mealPreference?: string | null
    specialRequirements?: string | null
    bookingDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerCreateOrConnectWithoutBookingsInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
  }

  export type FlightCreateWithoutBookingsInput = {
    id?: string
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    flightNumber: string
    flightStatus: $Enums.FlightStatus
    airline?: AirlineCreateNestedOneWithoutFlightsInput
    airplane?: AirplaneCreateNestedOneWithoutFlightsInput
    fromAirport: AirportCreateNestedOneWithoutDeparturesInput
    toAirport: AirportCreateNestedOneWithoutArrivalsInput
  }

  export type FlightUncheckedCreateWithoutBookingsInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type FlightCreateOrConnectWithoutBookingsInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
  }

  export type PassengerUpsertWithoutBookingsInput = {
    update: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    where?: PassengerWhereInput
  }

  export type PassengerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PassengerWhereInput
    data: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type PassengerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    frequentFlyer?: BoolFieldUpdateOperationsInput | boolean
    mealPreference?: NullableStringFieldUpdateOperationsInput | string | null
    specialRequirements?: NullableStringFieldUpdateOperationsInput | string | null
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUpsertWithoutBookingsInput = {
    update: XOR<FlightUpdateWithoutBookingsInput, FlightUncheckedUpdateWithoutBookingsInput>
    create: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    where?: FlightWhereInput
  }

  export type FlightUpdateToOneWithWhereWithoutBookingsInput = {
    where?: FlightWhereInput
    data: XOR<FlightUpdateWithoutBookingsInput, FlightUncheckedUpdateWithoutBookingsInput>
  }

  export type FlightUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airline?: AirlineUpdateOneWithoutFlightsNestedInput
    airplane?: AirplaneUpdateOneWithoutFlightsNestedInput
    fromAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    toAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
  }

  export type FlightUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type AirlineCreateManyCountryInput = {
    id?: string
    name: string
    logo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirportCreateManyCountryInput = {
    id?: string
    name: string
    code: string
    cityId: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityCreateManyCountryInput = {
    id?: string
    name: string
    cityIATACode: string
    stateId?: string | null
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StateCreateManyCountryInput = {
    id?: string
    name: string
    stateCode?: string | null
  }

  export type AirlineUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planes?: AirplaneUpdateManyWithoutAirlineNestedInput
    flights?: FlightUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planes?: AirplaneUncheckedUpdateManyWithoutAirlineNestedInput
    flights?: FlightUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    departures?: FlightUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departures?: FlightUncheckedUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUncheckedUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutCitiesNestedInput
    airports?: AirportUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateId?: NullableStringFieldUpdateOperationsInput | string | null
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airports?: AirportUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateId?: NullableStringFieldUpdateOperationsInput | string | null
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stateCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityCreateManyStateInput = {
    id?: string
    name: string
    cityIATACode: string
    countryId: string
    stateCountryKey?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    airports?: AirportUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airports?: AirportUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityIATACode?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    stateCountryKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportCreateManyCityInput = {
    id?: string
    name: string
    code: string
    lat: number
    lng: number
    address: string
    timezone: string
    website?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    countryId: string
  }

  export type AirportUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutAirportsNestedInput
    departures?: FlightUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
    departures?: FlightUncheckedUpdateManyWithoutFromAirportNestedInput
    arrivals?: FlightUncheckedUpdateManyWithoutToAirportNestedInput
  }

  export type AirportUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type AirplaneCreateManyAirlineInput = {
    id?: string
    model: string
    year: number
    seats: number
    capacity: number
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightCreateManyAirlineInput = {
    id?: string
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type AirplaneUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUpdateManyWithoutAirplaneNestedInput
  }

  export type AirplaneUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUncheckedUpdateManyWithoutAirplaneNestedInput
  }

  export type AirplaneUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airplane?: AirplaneUpdateOneWithoutFlightsNestedInput
    fromAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    toAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type FlightCreateManyAirplaneInput = {
    id?: string
    airlineId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type FlightUpdateWithoutAirplaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airline?: AirlineUpdateOneWithoutFlightsNestedInput
    fromAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    toAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutAirplaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutAirplaneInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type FlightCreateManyFromAirportInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    toAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type FlightCreateManyToAirportInput = {
    id?: string
    airlineId?: string | null
    airplaneId?: string | null
    departureTime: Date | string
    arrivalTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightDuration: number
    flightDistance: number
    fromAirportId: string
    flightNumber: string
    flightStatus: $Enums.FlightStatus
  }

  export type FlightUpdateWithoutFromAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airline?: AirlineUpdateOneWithoutFlightsNestedInput
    airplane?: AirplaneUpdateOneWithoutFlightsNestedInput
    toAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutFromAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutFromAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    toAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type FlightUpdateWithoutToAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    airline?: AirlineUpdateOneWithoutFlightsNestedInput
    airplane?: AirplaneUpdateOneWithoutFlightsNestedInput
    fromAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutToAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutToAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: NullableStringFieldUpdateOperationsInput | string | null
    airplaneId?: NullableStringFieldUpdateOperationsInput | string | null
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightDuration?: IntFieldUpdateOperationsInput | number
    flightDistance?: IntFieldUpdateOperationsInput | number
    fromAirportId?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    flightStatus?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type BookingCreateManyFlightInput = {
    id?: string
    passengerId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingCreateManyPassengerInput = {
    id?: string
    flightId: string
    seatNumber: string
    bookingDate?: Date | string
    passengerClass: $Enums.PassengerClass
    bookingStatus: $Enums.BookingStatus
  }

  export type BookingUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }

  export type BookingUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerClass?: EnumPassengerClassFieldUpdateOperationsInput | $Enums.PassengerClass
    bookingStatus?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}