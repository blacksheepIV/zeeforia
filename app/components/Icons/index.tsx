import React from 'react'
type IconProps = React.SVGProps<SVGSVGElement> & {
  width?: string | number
  height?: string | number
  fill?: string
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
    </svg>
  )
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M162.21875,124.67188l-48-32A3.99967,3.99967,0,0,0,108,96v64a3.99987,3.99987,0,0,0,6.21875,3.32812l48-32a3.99979,3.99979,0,0,0,0-6.65624ZM116,152.52588V103.47412L152.78906,128Zm114.46-81.7207a19.95588,19.95588,0,0,0-12.06934-13.62012C184.59766,44.19873,130.272,44.397,128.02539,44.40771c-2.29443-.01318-56.62207-.20947-90.416,12.77735A19.95556,19.95556,0,0,0,25.54053,70.80469C23.0127,80.50928,20,98.30957,20,128c0,29.69141,3.0127,47.49121,5.54,57.19482a19.95588,19.95588,0,0,0,12.06934,13.62012c33.793,12.98633,88.11865,12.791,90.36523,12.77735.11279.00048.35059.002.707.002,6.88379,0,57.57764-.43164,89.709-12.7793a19.95556,19.95556,0,0,0,12.06885-13.61963C232.9873,175.49072,236,157.69043,236,128,236,98.30859,232.9873,80.50879,230.46,70.80518Zm-7.74219,112.37353a11.9384,11.9384,0,0,1-7.19677,8.16846c-32.37452,12.44092-86.9458,12.25342-87.54639,12.24512-.54981-.00049-55.12207.19531-87.49609-12.24512a11.93961,11.93961,0,0,1-7.19629-8.16895C30.87207,173.92676,28,156.84424,28,128c0-28.84326,2.87256-45.92676,5.28223-55.17871A11.9384,11.9384,0,0,1,40.479,64.65283c32.37452-12.44092,86.94825-12.24267,87.54639-12.24512.5459-.00634,55.12158-.19628,87.49609,12.24512a11.93961,11.93961,0,0,1,7.19629,8.169C225.12793,82.07324,228,99.15576,228,128,228,156.84326,225.12744,173.92676,222.71777,183.17871Z" />
    </svg>
  )
}

function EmailIcon(props: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      id="Flat"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M227.97314,55.7334a4.0173,4.0173,0,0,0-.04345-.43262c-.02246-.12671-.0586-.24707-.09229-.36914a3.84786,3.84786,0,0,0-.11719-.37744,3.91559,3.91559,0,0,0-.17236-.36475c-.05664-.11084-.11035-.22143-.17773-.32763a4.0245,4.0245,0,0,0-.26416-.35376c-.05518-.0691-.09717-.145-.15772-.21119-.01953-.021-.043-.03515-.0625-.05566a3.9161,3.9161,0,0,0-.33447-.29809c-.08789-.07374-.17188-.15357-.26465-.21851a3.9445,3.9445,0,0,0-.35547-.207c-.10693-.05933-.20947-.12525-.32031-.17407-.11963-.05274-.24707-.08692-.37207-.12793-.12207-.0398-.24121-.0857-.36572-.11353-.11719-.02612-.23926-.03467-.35987-.05029a3.90931,3.90931,0,0,0-.42675-.043C224.05713,52.00806,224.02979,52,224,52H32c-.0293,0-.05566.00781-.085.00854a4.05618,4.05618,0,0,0-.44385.04468c-.11426.01538-.23.0232-.34082.04785a4.00391,4.00391,0,0,0-.39355.12207c-.11524.03858-.2334.06983-.34375.11841-.11914.05225-.23.12281-.34473.187-.11182.06324-.227.12037-.33252.1941-.09619.06738-.18359.1499-.2749.2268a4.104,4.104,0,0,0-.32666.29126c-.01953.02075-.043.03491-.0625.05615-.06055.06617-.10254.14209-.15772.21119a4.02082,4.02082,0,0,0-.26416.35351c-.06738.10669-.12158.21753-.17822.32837-.061.11963-.12256.23779-.17187.364-.04786.12427-.082.25074-.11719.37818-.03369.12207-.06983.24219-.09229.36865a4.0173,4.0173,0,0,0-.04345.43262C28.021,55.82324,28,55.90869,28,56V192a12.01343,12.01343,0,0,0,12,12H216a12.01343,12.01343,0,0,0,12-12V56C228,55.90869,227.979,55.82324,227.97314,55.7334ZM213.71631,60,128,138.57373,42.28369,60ZM216,196H40a4.00427,4.00427,0,0,1-4-4V65.09326l89.29688,81.85547a4.00089,4.00089,0,0,0,5.40624,0L220,65.09326V192A4.00427,4.00427,0,0,1,216,196Z" />
    </svg>
  )
}

function BehanceIcon({ fill = '#000', ...props }: IconProps) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.5,5.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5a2,2,0,0,0-2-2Z"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M34.0045,29.6513a3.778,3.778,0,0,1-3.2838,1.9072h0a3.7792,3.7792,0,0,1-3.7792-3.7792V25.3227a3.7792,3.7792,0,0,1,3.7792-3.7792h0A3.7792,3.7792,0,0,1,34.5,25.3227V26.551H26.9415"
      />
      <path
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8662"
        d="M19.7358,24a3.7793,3.7793,0,0,1,0,7.5585H13.5V16.4415h6.2358a3.7793,3.7793,0,0,1,0,7.5585Z"
      />
      <line
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8662"
        x1="19.7358"
        y1="24"
        x2="13.5"
        y2="24"
      />
      <line
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="26.9415"
        y1="16.4415"
        x2="34.5"
        y2="16.4415"
      />
    </svg>
  )
}

function ExternalLinkIcon({ fill = '#000', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Interface / External_Link">
        <path
          id="Vector"
          d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function CloseIcon({ fill = '#000', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Menu / Close_LG">
        <path
          id="Vector"
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export {
  MenuIcon,
  InstagramIcon,
  YoutubeIcon,
  EmailIcon,
  BehanceIcon,
  ExternalLinkIcon,
  CloseIcon,
}
