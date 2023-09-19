// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Artist → Works*
 */
export interface ArtistDocumentDataWorksItem {
  /**
   * Image field in *Artist → Works*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.works[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text Box field in *Artist → Works*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.works[].text_box
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_box: prismic.RichTextField;
}

type ArtistDocumentDataSlicesSlice = ExhibitionSliceSlice | ElsewhereSliceSlice;

/**
 * Content for Artist documents
 */
interface ArtistDocumentData {
  /**
   * Name field in *Artist*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Short bio field in *Artist*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.bio
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bio: prismic.KeyTextField;

  /**
   * Extended bio field in *Artist*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.extended_bio
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  extended_bio: prismic.RichTextField;

  /**
   * Works field in *Artist*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.works[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  works: prismic.GroupField<Simplify<ArtistDocumentDataWorksItem>>;

  /**
   * CV text box field in *Artist*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.cv_text_box
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cv_text_box: prismic.RichTextField;

  /**
   * Bibliography field in *Artist*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.bibliography
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bibliography: prismic.RichTextField;

  /**
   * Slice Zone field in *Artist*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArtistDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Artist*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: artist.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Artist*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Artist*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: artist.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Artist document from Prismic
 *
 * - **API ID**: `artist`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtistDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ArtistDocumentData>, "artist", Lang>;

/**
 * Item in *Edition → Gallery*
 */
export interface EditionDocumentDataGalleryItem {
  /**
   * Image field in *Edition → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type EditionDocumentDataSlicesSlice = never;

/**
 * Content for Edition documents
 */
interface EditionDocumentData {
  /**
   * Title field in *Edition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Author field in *Edition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Specifications field in *Edition*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.Specifications
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  Specifications: prismic.RichTextField;

  /**
   * Download link field in *Edition*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.download_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  download_link: prismic.LinkField;

  /**
   * Extended description field in *Edition*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.extended_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  extended_description: prismic.RichTextField;

  /**
   * Gallery field in *Edition*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<EditionDocumentDataGalleryItem>>;

  /**
   * Slice Zone field in *Edition*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EditionDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Edition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: edition.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Edition*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Edition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: edition.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Edition document from Prismic
 *
 * - **API ID**: `edition`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EditionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<EditionDocumentData>,
    "edition",
    Lang
  >;

/**
 * Item in *Exhibition → Gallery*
 */
export interface ExhibitionDocumentDataGalleryItem {
  /**
   * Image field in *Exhibition → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Video embed field in *Exhibition → Gallery*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.gallery[].video_embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video_embed: prismic.EmbedField;

  /**
   * Media caption field in *Exhibition → Gallery*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.gallery[].media_caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  media_caption: prismic.RichTextField;
}

type ExhibitionDocumentDataSlicesSlice = never;

/**
 * Content for Exhibition documents
 */
interface ExhibitionDocumentData {
  /**
   * TItle field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Author field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Date from field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.date_from
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date to field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.date_to
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;

  /**
   * Gallery field in *Exhibition*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<ExhibitionDocumentDataGalleryItem>>;

  /**
   * Slice Zone field in *Exhibition*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExhibitionDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: exhibition.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Exhibition*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: exhibition.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Exhibition document from Prismic
 *
 * - **API ID**: `exhibition`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExhibitionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExhibitionDocumentData>,
    "exhibition",
    Lang
  >;

/**
 * Item in *Fair → Gallery*
 */
export interface FairDocumentDataGalleryItem {
  /**
   * Image field in *Fair → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Video embed field in *Fair → Gallery*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.gallery[].video_embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video_embed: prismic.EmbedField;

  /**
   * Media caption field in *Fair → Gallery*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.gallery[].media_caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  media_caption: prismic.RichTextField;
}

type FairDocumentDataSlicesSlice = never;

/**
 * Content for Fair documents
 */
interface FairDocumentData {
  /**
   * Title field in *Fair*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Author field in *Fair*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Date from field in *Fair*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.date_from
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date to field in *Fair*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.date_to
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;

  /**
   * Exhibition views field in *Fair*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.exhibition_views
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  exhibition_views: prismic.KeyTextField;

  /**
   * Press kit field in *Fair*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.press_kit
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  press_kit: prismic.LinkField;

  /**
   * Gallery field in *Fair*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<FairDocumentDataGalleryItem>>;

  /**
   * Slice Zone field in *Fair*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FairDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Fair*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: fair.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Fair*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fair.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Fair*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: fair.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Fair document from Prismic
 *
 * - **API ID**: `fair`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FairDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FairDocumentData>, "fair", Lang>;

type HomepageDocumentDataSlicesSlice = TestSectionSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Sample Text field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.sample_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sample_text: prismic.RichTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Info → Links*
 */
export interface InfoDocumentDataLinksItem {
  /**
   * Link field in *Info → Links*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.links[].link
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  link: prismic.RichTextField;
}

type InfoDocumentDataSlicesSlice = never;

/**
 * Content for Info documents
 */
interface InfoDocumentData {
  /**
   * Address field in *Info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * Contact field in *Info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.contact
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact: prismic.RichTextField;

  /**
   * Hours field in *Info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info.hours
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hours: prismic.RichTextField;

  /**
   * Links field in *Info*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: info.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<InfoDocumentDataLinksItem>>;

  /**
   * Slice Zone field in *Info*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: info.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<InfoDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: info.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Info*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: info.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: info.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Info document from Prismic
 *
 * - **API ID**: `info`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type InfoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<InfoDocumentData>, "info", Lang>;

/**
 * Item in *News → News Items*
 */
export interface NewsDocumentDataNewsItemsItem {
  /**
   * Title field in *News → News Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.news_items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Type field in *News → News Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news.news_items[].type
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type: prismic.KeyTextField;

  /**
   * Date from field in *News → News Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: news.news_items[].date_from
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date to field in *News → News Items*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: news.news_items[].date_to
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;
}

type NewsDocumentDataSlicesSlice = never;

/**
 * Content for News documents
 */
interface NewsDocumentData {
  /**
   * News Items field in *News*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: news.news_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  news_items: prismic.GroupField<Simplify<NewsDocumentDataNewsItemsItem>>;

  /**
   * Slice Zone field in *News*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: news.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NewsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: news.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: news.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<NewsDocumentData>, "news", Lang>;

type NewsletterDocumentDataSlicesSlice = never;

/**
 * Content for Newsletter documents
 */
interface NewsletterDocumentData {
  /**
   * Text Box field in *Newsletter*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is a text box...
   * - **API ID Path**: newsletter.text_box
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_box: prismic.RichTextField;

  /**
   * Slice Zone field in *Newsletter*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NewsletterDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Newsletter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: newsletter.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Newsletter*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Newsletter*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: newsletter.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Newsletter document from Prismic
 *
 * - **API ID**: `newsletter`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsletterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NewsletterDocumentData>,
    "newsletter",
    Lang
  >;

export type AllDocumentTypes =
  | ArtistDocument
  | EditionDocument
  | ExhibitionDocument
  | FairDocument
  | HomepageDocument
  | InfoDocument
  | NewsDocument
  | NewsletterDocument;

/**
 * Primary content in *Edition → Primary*
 */
export interface EditionSliceDefaultPrimary {
  /**
   * Title field in *Edition → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Author field in *Edition → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Editional authors field in *Edition → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.editional_authors
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  editional_authors: prismic.RichTextField;

  /**
   * Specifications field in *Edition → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.specifications
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  specifications: prismic.RichTextField;

  /**
   * Download link field in *Edition → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.download_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  download_link: prismic.LinkField;

  /**
   * Description field in *Edition → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *Edition → Items*
 */
export interface EditionSliceDefaultItem {
  /**
   * Image field in *Edition → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text Box field in *Edition → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.items[].text_box
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_box: prismic.RichTextField;

  /**
   * Video embed field in *Edition → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: edition.items[].video_embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video_embed: prismic.EmbedField;
}

/**
 * Default variation for Edition Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EditionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EditionSliceDefaultPrimary>,
  Simplify<EditionSliceDefaultItem>
>;

/**
 * Slice variation for *Edition*
 */
type EditionSliceVariation = EditionSliceDefault;

/**
 * Edition Shared Slice
 *
 * - **API ID**: `edition`
 * - **Description**: Edition
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EditionSlice = prismic.SharedSlice<
  "edition",
  EditionSliceVariation
>;

/**
 * Primary content in *ElsewhereSlice → Primary*
 */
export interface ElsewhereSliceSliceDefaultPrimary {
  /**
   * Title field in *ElsewhereSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date from field in *ElsewhereSlice → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.primary.date_from
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date to field in *ElsewhereSlice → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.primary.date_to
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;
}

/**
 * Primary content in *ElsewhereSlice → Items*
 */
export interface ElsewhereSliceSliceDefaultItem {
  /**
   * Image field in *ElsewhereSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Video embed field in *ElsewhereSlice → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.items[].video_embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video_embed: prismic.EmbedField;

  /**
   * Caption field in *ElsewhereSlice → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: elsewhere_slice.items[].caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;
}

/**
 * Default variation for ElsewhereSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ElsewhereSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ElsewhereSliceSliceDefaultPrimary>,
  Simplify<ElsewhereSliceSliceDefaultItem>
>;

/**
 * Slice variation for *ElsewhereSlice*
 */
type ElsewhereSliceSliceVariation = ElsewhereSliceSliceDefault;

/**
 * ElsewhereSlice Shared Slice
 *
 * - **API ID**: `elsewhere_slice`
 * - **Description**: ElsewhereSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ElsewhereSliceSlice = prismic.SharedSlice<
  "elsewhere_slice",
  ElsewhereSliceSliceVariation
>;

/**
 * Primary content in *ExhibitionSlice → Primary*
 */
export interface ExhibitionSliceSliceDefaultPrimary {
  /**
   * Title field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date from field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.date_from
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_from: prismic.DateField;

  /**
   * Date to field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.date_to
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_to: prismic.DateField;
}

/**
 * Primary content in *ExhibitionSlice → Items*
 */
export interface ExhibitionSliceSliceDefaultItem {
  /**
   * Image field in *ExhibitionSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Video embed field in *ExhibitionSlice → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.items[].video_embed
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video_embed: prismic.EmbedField;

  /**
   * Media caption field in *ExhibitionSlice → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.items[].media_caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  media_caption: prismic.RichTextField;
}

/**
 * Default variation for ExhibitionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExhibitionSliceSliceDefaultPrimary>,
  Simplify<ExhibitionSliceSliceDefaultItem>
>;

/**
 * Slice variation for *ExhibitionSlice*
 */
type ExhibitionSliceSliceVariation = ExhibitionSliceSliceDefault;

/**
 * ExhibitionSlice Shared Slice
 *
 * - **API ID**: `exhibition_slice`
 * - **Description**: ExhibitionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionSliceSlice = prismic.SharedSlice<
  "exhibition_slice",
  ExhibitionSliceSliceVariation
>;

/**
 * Primary content in *TestSection → Primary*
 */
export interface TestSectionSliceDefaultPrimary {
  /**
   * Text Box field in *TestSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: test_section.primary.text_box
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_box: prismic.RichTextField;
}

/**
 * Default variation for TestSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestSection*
 */
type TestSectionSliceVariation = TestSectionSliceDefault;

/**
 * TestSection Shared Slice
 *
 * - **API ID**: `test_section`
 * - **Description**: TestSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSectionSlice = prismic.SharedSlice<
  "test_section",
  TestSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArtistDocument,
      ArtistDocumentData,
      ArtistDocumentDataWorksItem,
      ArtistDocumentDataSlicesSlice,
      EditionDocument,
      EditionDocumentData,
      EditionDocumentDataGalleryItem,
      EditionDocumentDataSlicesSlice,
      ExhibitionDocument,
      ExhibitionDocumentData,
      ExhibitionDocumentDataGalleryItem,
      ExhibitionDocumentDataSlicesSlice,
      FairDocument,
      FairDocumentData,
      FairDocumentDataGalleryItem,
      FairDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      InfoDocument,
      InfoDocumentData,
      InfoDocumentDataLinksItem,
      InfoDocumentDataSlicesSlice,
      NewsDocument,
      NewsDocumentData,
      NewsDocumentDataNewsItemsItem,
      NewsDocumentDataSlicesSlice,
      NewsletterDocument,
      NewsletterDocumentData,
      NewsletterDocumentDataSlicesSlice,
      AllDocumentTypes,
      EditionSlice,
      EditionSliceDefaultPrimary,
      EditionSliceDefaultItem,
      EditionSliceVariation,
      EditionSliceDefault,
      ElsewhereSliceSlice,
      ElsewhereSliceSliceDefaultPrimary,
      ElsewhereSliceSliceDefaultItem,
      ElsewhereSliceSliceVariation,
      ElsewhereSliceSliceDefault,
      ExhibitionSliceSlice,
      ExhibitionSliceSliceDefaultPrimary,
      ExhibitionSliceSliceDefaultItem,
      ExhibitionSliceSliceVariation,
      ExhibitionSliceSliceDefault,
      TestSectionSlice,
      TestSectionSliceDefaultPrimary,
      TestSectionSliceVariation,
      TestSectionSliceDefault,
    };
  }
}