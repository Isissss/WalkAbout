import {redirect} from '@remix-run/node'
import type {LoaderFunctionArgs} from '@remix-run/node'
import {Form} from '@remix-run/react'
import {createSupabaseServerClient} from '~/supabase.server'
import PageHeader from "~/components/pageHeader";

export const loader = async ({request}: LoaderFunctionArgs) => {
    const {supabaseClient} = createSupabaseServerClient(request)
    const {
        data: {user},
    } = await supabaseClient.auth.getUser()

    if (!user) {
        return redirect('/')
    }

    return new Response(null)
}

const Profiel = () => {
    return (
        <>
            <PageHeader title='Account'/>
            <div className="w-full flex gap-2">
                <div className="flex flex-col w-1/2 gap-2">
                    <div
                        className="flex justify-between rounded-3xl border-2 border-foreground no-underline text-black p-2">
                        <div className="text-2xl font-bold">
                            Jolanda
                            <div className="text-xl font-normal">
                                65 jaar oud
                                <br/>
                                Zuid-Holland
                            </div>
                        </div>
                        <img
                            src="/women.png"
                            alt=""
                            className="h-52 w-72 object-cover rounded-3xl"
                        />
                    </div>
                    <div
                        className="flex justify-center text-center rounded-3xl border-2 border-foreground no-underline text-black p-2">
                        <div className="text-2xl font-bold">
                            Punten
                            <div className="text-xl font-normal">
                                160 punten gespaard
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex justify-center text-center rounded-3xl border-2 border-foreground no-underline text-black p-2">
                        <div className="text-2xl font-bold">
                            Recente wandelroutes
                            <a className="block rounded-3xl w-full border-2 border-foreground grid grid-cols-4 no-underline text-black"
                               href="/routes/21">
                                <div className="col-span-1 overflow-hidden"><img src="/dummy.png" alt=""
                                                                                 className="h-full w-full object-cover rounded-l-3xl"/>
                                </div>
                                <div className="col-span-3 p-5 flex flex-col space-y-3"><h2
                                    className="text-secondary text-3x col-span-3 text-3xl">Regio Blaak</h2>
                                    <table className="w-full text-left">
                                        <tr>
                                            <th className="w-10 flex">Afstand:</th>
                                            <td>4 kilometer</td>
                                        </tr>
                                        <tr>
                                            <th className="w-10 flex">Moeilijkheid:</th>
                                            <td>2</td>
                                        </tr>
                                    </table>
                                </div>
                            </a>
                            <a className="block mt-2 rounded-3xl w-full border-2 border-foreground grid grid-cols-4 no-underline text-black"
                               href="/routes/21">
                                <div className="col-span-1 overflow-hidden"><img src="/dummy.png" alt=""
                                                                                 className="h-full w-full object-cover rounded-l-3xl"/>
                                </div>
                                <div className="col-span-3 p-5 flex flex-col space-y-3"><h2
                                    className="text-secondary text-3x col-span-3 text-3xl">Regio Blaak</h2>
                                    <table className="w-full text-left">
                                        <tr>
                                            <th className="w-10 flex">Afstand:</th>
                                            <td>4 kilometer</td>
                                        </tr>
                                        <tr>
                                            <th className="w-10 flex">Moeilijkheid:</th>
                                            <td>2</td>
                                        </tr>
                                    </table>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="w-1/2 flex justify-center text-center rounded-3xl border-2 border-foreground no-underline text-black p-2">
                    <div className="w-full text-2xl font-bold">
                        Vouchers
                        <div className="text-xl font-normal">
                            <div
                                className="flex gap-3 rounded-3xl border-2 border-foreground no-underline text-black p-2">
                                <img
                                    src="/coffee.jpg"
                                    alt=""
                                    className="h-52 w-72 object-cover rounded-3xl"
                                />
                                <div className="text-2xl font-bold text-left">
                                    Voucher
                                    <div className="text-xl font-normal">
                                        50% korting op een warme drank
                                        (Koffie, thee)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-normal">
                            <div
                                className="flex mt-2  gap-3 rounded-3xl border-2 border-foreground no-underline text-black p-2">
                                <img
                                    src="/coffee.jpg"
                                    alt=""
                                    className="h-52 w-72 object-cover rounded-3xl"
                                />
                                <div className="text-2xl font-bold text-left">
                                    Voucher
                                    <div className="text-xl font-normal">
                                        50% korting op een warme drank
                                        (Koffie, thee)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-normal">
                            <div
                                className="flex mt-2 gap-3 rounded-3xl border-2 border-foreground no-underline text-black p-2">
                                <img
                                    src="/coffee.jpg"
                                    alt=""
                                    className="h-52 w-72 object-cover rounded-3xl"
                                />
                                <div className="text-2xl font-bold text-left">
                                    Voucher
                                    <div className="text-xl font-normal">
                                        50% korting op een warme drank
                                        (Koffie, thee)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section
                className="bg-orange-500 font-bold rounded-3xl border-2 border-foreground no-underline text-black p-2 text-2xl w-24 text-center">
                <Form action="/sign-out" method="post">
                    <button type="submit">Uitloggen</button>
                </Form>
            </section>
        </>
    )
}

export default Profiel