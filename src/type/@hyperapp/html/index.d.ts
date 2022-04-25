declare module '@hyperapp/html' {
    // https://stackoverflow.com/a/48846446/663911
    import {CustomPayloads, ElementVNode, MaybeVNode, Props, TextVNode} from 'hyperapp';

    // function tag (tag: string): <S, C = unknown>(
    //     props: CustomPayloads<S, C> & Props<S>,
    //     children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    // ) => ElementVNode<S>

    function text<T = unknown> (
        // Values, aside from symbols and functions, can be handled.
        value: T extends symbol | ((..._: unknown[]) => unknown) ? never : T,
    ): TextVNode

    function a<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function b<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function i<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function p<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function q<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function s<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function br<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function dd<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function dl<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function dt<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function em<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h1<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h2<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h3<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h4<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h5<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function h6<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function hr<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function li<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function ol<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function rp<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function rt<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function td<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function th<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function tr<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function ul<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function bdi<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function bdo<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function col<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function del<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function dfn<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function div<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function img<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function ins<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function kbd<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function map<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function nav<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function pre<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function rtc<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function sub<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function sup<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function wbr<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function abbr<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function area<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function cite<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function code<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function data<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function form<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function main<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function mark<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function ruby<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function samp<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function span<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function time<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function aside<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function audio<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function input<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function label<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function meter<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function param<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function small<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function table<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function tbody<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function tfoot<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function thead<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function track<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function video<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function button<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function canvas<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function dialog<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function figure<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function footer<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function header<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function iframe<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function legend<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function object<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function option<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function output<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function select<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function source<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function strong<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function address<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function article<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function caption<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function details<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function section<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function summary<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function picture<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function colgroup<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function datalist<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function fieldset<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function menuitem<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function optgroup<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function progress<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function textarea<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function blockquote<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>

    function figcaption<S, C = unknown> (
        props: CustomPayloads<S, C> & Props<S>,
        children?: MaybeVNode<S> | readonly MaybeVNode<S>[],
    ): ElementVNode<S>
}
