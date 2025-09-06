import { Metadata, ResolvingMetadata } from 'next';
import { ReactNode } from 'react';

type Params = Record<string, string | string[] | undefined>;
type SearchParams = Record<string, string | string[] | undefined>;

export type PageParams<T extends Params> = {
  params: Promise<T>;
};

export type PageSearchParams<T extends SearchParams> = {
  searchParams: Promise<T>;
};

export type PageRouteProps<
  T extends Params | undefined = undefined,
  Q extends SearchParams | undefined = undefined,
> = {
  params: T extends Params ? PageParams<T>['params'] : undefined;
  searchParams: Q extends SearchParams
    ? PageSearchParams<Q>['searchParams']
    : undefined;
};

// TODO: improve this
export type PageLayout<T extends [string, ...string[]] = ['children']> =
  Readonly<Record<T[number], ReactNode>>;

export type PageError = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type DynamicMetadataFunction<
  T extends Params | undefined = undefined,
  Q extends SearchParams | undefined = undefined,
> = (
  props: PageRouteProps<T, Q>,
  parent: ResolvingMetadata,
) => Promise<Metadata>;

export type FormStateFunction<
  T extends Record<string, unknown> = { errors: string[] | null },
> = (state: T, formData: FormData) => T | Promise<T>;

export type SelectOption<T = ReactNode> = {
  label: T;
  value: string;
};
