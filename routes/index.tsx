// deno-lint-ignore-file
import { Card } from "../components/Card.tsx";
import SendMail from "../islands/SendMail.tsx";

export default function Home() {

 return (
    <div
      class="
    bg-green-300 bg-gradient-to-br from-blue-100 via-green-200 to-yellow-100 px-4 py-8 mx-auto "
    >
      <div class="max-w-screen-lg min-h-screen mx-auto flex flex-col gap-y-4 ">
        <h1 class="text-xl sm:text-4xl font-bold text-center">
          Welcome to Hugo's Portfolio
        </h1>
        <Card class="bg-transparent sm:bg-green-300 flex flex-col sm:flex-row gap-x-4 sm:gap-y-4">
          <div class="flex flex-auto flex-col min-w-fit items-center">
            <img
              class="rounded-full h-[128px] w-[128px] shadow-md "
              src="/pp.png"
            />
            <span class="text-lg sm:text-2xl font-semibold">Hugo Malzieux</span>
            <span class="italic">Developer Fullstack</span>
          </div>
          {/* <div class={`border-none sm:border-2 border-green-600`}/> */}
          <div class="flex flex-initial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            atortor orci. Proin non leo vel orci molestie dictum. Mauris
            elementumcondimentum massa at pretium. Etiam vel purus vel nulla
            efficitursemper. Nam ornare laoreet sodales. In hac habitasse platea
            dictumst.Nulla at dolor non risus luctus dapibus. In scelerisque a
            diam vitaesodales. Morbi vitae elit ex. Nam euismod, nibh tempor
            dapibus congue,nulla felis volutpat purus, etornare. Etiam non
            hendrerit sapien, a porttitor ligula. In blanditviverra sapien, et
            sollicitudin quam commodo nec. Mauris faucibusporta orci, quis
            sagittis elit turpis eget enim. Nunc sit amet eros utmassa molestie
            porta vitae sit amet ipsum. Praesent cursus, est eufringilla
            dignissim, tortor ipsum sollicitudin sapien, a vulputatedolor nulla
            ut leo. Fusce vehicula vitae magna id accumsan. Phasellustempus,
            neque fermentum bibendum faucibus, neque nibh volutpat mi, sedornare
            justo sapien ut nunc. Phasellus gravida quam et egestasmaximus.
            Mauris non euismod nibh. Donec in ipsum a enim ullamcorperfacilisis
            et in orci. Nam fringilla suscipit sapien. Cras felis ante,dignissim
            quis sem in, egestas fringilla ex. Praesent sed orcialiquet,
            consectetur leo et, sollicitudin libero. Etiam ultriciespurus ut
            fermentum eleifend. Proin id faucibus quam. Aliquam nuncmetus,
            dapibus et convallis vitae, fringilla in ipsum. Sed et quamluctus,
            dictum dolor condimentum, condimentum nunc. Nullam at egestasrisus.
            Maecenas vel fringilla ipsum. Curabitur vulputate urna augue,ac
            luctus dui rhoncus at. In mollis ipsum sed dictum auctor. Etiam
            euturpis vitae arcu euismod imperdiet non sit amet tellus.
            Vestibulumante ipsum primis in faucibus orci luctus et ultrices
            posuere cubiliacurae; Morbi euismod convallis nulla, tempor
            imperdiet neque. Sedultricies viverra justo non laoreet. Nam nibh
            felis, volutpat a congueid, blandit at nisi. Etiam nec nisl ut
            sapien facilisis lacinia. Proinconsectetur sodales enim aliquet
            mollis. Sed bibendum ac nulla mattisviverra. Quisque malesuada
            vestibulum quam id dapibus. Nulla ornarenibh eu gravida interdum.
            Suspendisse ultricies cursus ullamcorper.Integer ultricies, erat
          </div>
        </Card>
      </div>
    </div> 
  );
}
