// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function ApiHomepageIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 432 216"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M413.641 64.581a1.832 1.832 0 01-1.828-1.83c0-1.008.821-1.829 1.828-1.829 1.008 0 1.83.821 1.83 1.829s-.822 1.83-1.83 1.83m-5.066 99.624c-.522-.867-1.113-1.848-3.408-1.848-4.182 0-6.278-1.042-8.128-1.96-1.515-.753-2.949-1.464-5.187-1.464H235.146l-.122.316s-1.855 4.84-2.696 7.051c-1.967-2.977-9.236-12.571-21.153-12.571-6.039 0-11.129 2.716-13.553 6.735.191-1.125.417-2.262.65-3.381 4.044-3.72 8.271-5.535 12.903-5.535 9.521 0 16.294 5.47 20.298 10.059l.217.248 1.421-3.707a2.194 2.194 0 012.035-1.396h156.706c2.752 0 4.56.898 6.157 1.691 1.794.891 3.489 1.733 7.159 1.733 2.686 0 3.952 1.521 5.069 2.862.831.998 1.565 1.88 2.702 1.88.064 0 .133-.008.2-.014v1.351c-3.383-.088-3.983-1.084-4.564-2.05m-193.915-3.799c-3.22-2.089-7.114-1.618-9.405-.212.484-1.398.933-2.892 1.052-4.81a17.94 17.94 0 014.868-.67c1.856 0 3.583.261 5.202.681-1.304 1.225-1.693 3.061-1.717 5.011m-8.542 2.886c-.074 1.926.635 3.099 1.025 3.592-.077.546-.534 1.202-1.445 1.202-.858 0-1.768-.691-1.768-1.973 0-1.049.753-2.139 2.188-2.821m8.542-2.409c.015.943.103 1.903.204 2.826-1.149-1.309-2.986-2.095-5.285-2.095-2.456 0-4.226.731-5.325 1.76.207-.89.487-1.715.783-2.556 2.128-1.593 6.285-2.248 9.623.065m-8.072 13.662c-6.174 0-9.506-4.497-9.506-8.728 0-4.558 3.326-8.385 8.206-10.112-.168 1.837-.654 3.294-1.146 4.686-.589 1.666-1.197 3.388-1.197 5.722 0 1.852 1.4 2.959 2.753 2.959 1.529 0 2.444-1.197 2.444-2.354v-.191l-.129-.142c-.27-.293-1.092-1.383-.881-3.47a8.988 8.988 0 012.447-.315c2.788 0 5.6 1.432 5.6 4.632 0 3.535-2.256 7.313-8.591 7.313m-6.675-26.805c0-1.16-.096-2.021-.243-2.678 3.267-2.15 8.279-4.569 14.314-4.569 3.94 0 9.008.592 10.783 3.415l.909 1.43a2.592 2.592 0 002.895 1.093 2.59 2.59 0 001.858-2.475v-11.318a2.58 2.58 0 00-2.577-2.578h-4.59v-1.76a944.714 944.714 0 006.493-4.433c8.689-5.968 17.673-12.139 27.155-16.533l97.974.108c.308.059.622.059.904.005l41.606.047.239.006c.31.085.514.115.73.144.059.008.13.017.236.036l.051.011c.098.02.196.038.274.051.722.113 1.431.17 2.108.17 1.16 0 2.083.242 2.825.437.65.17 1.263.33 1.943.33.383 0 .754-.053 1.101-.157l.129-.038a2.558 2.558 0 001.512-1.221l.038-.068c1.507.914 3.038.892 4.559-.059v57.37c-1.073.103-1.756-.711-2.597-1.722-1.115-1.339-2.502-3.005-5.374-3.005-3.577 0-5.231-.821-6.984-1.692-1.635-.812-3.487-1.732-6.332-1.732H235.146a2.594 2.594 0 00-2.405 1.65l-1.186 3.094c-4.085-4.598-10.88-9.948-20.38-9.948-4.581 0-8.767 1.729-12.765 5.27.106-.502.214-1 .319-1.489.635-2.942 1.184-5.483 1.184-7.192m-1.356-4.762c.859-1.107 6.277-5.063 15.427-5.063 6.674 0 11.017 1.524 12.959 4.611l.909 1.43v-11.318h-7.168v-5.711a800.17 800.17 0 007.612-5.185c9.266-6.365 18.271-12.529 28.051-16.986l99.005.113.007.04c.058-.011.115-.029.173-.04l41.886.048s.611.011.667.029c.499.158.491.111.972.198.09.016.178.037.269.051.601.095 1.178.139 1.706.139 1.493 0 2.64.301 3.478.521.524.138.941.247 1.29.247.128 0 .247-.015.359-.048l.129-.039.066-.118c.417-.767 1.492-1.547 2.129-1.547.466 0 .738.184 1.053.396.3.204.641.435 1.133.435 1.008 0 1.685-.969 1.685-1.872 0-.84-.725-1.708-1.94-1.708-.106 0-.254.017-.428.038-.379.048-.92.112-1.379-.01.364-.8.56-2.395.56-3.745 0-2.402-.915-4.175-1.799-5.89-.783-1.518-1.522-2.952-1.522-4.69 0-.57.074-1.896.766-1.896.477 0 .565.751.58 1.074l.015.313h.315c.848-.004 2.775-1.223 2.775-3.222 0-1.232-.501-1.974-.904-2.571-.26-.387-.465-.693-.465-1.024 0-.619.252-1.103.846-1.618l.336-.295-.381-.234c-.477-.291-.937-.374-1.371-.243-.849.255-1.311 1.239-1.587 1.827-.047.101-.087.188-.122.252-.21.389-.628.799-1.11 1.274-.458.449-.977.959-1.448 1.577-.961 1.261-1.307 2.641-1.047 4.2-.74-.276-1.645-.49-2.941-.49-4.343 0-6.616 2.79-6.616 5.545 0 2.034 1.388 3.51 3.301 3.51 1.504 0 2.639-1.266 2.639-2.946 0-1.74-1.12-2.52-2.229-2.52-.501 0-.979.27-1.31.74-.246.347-.435.862-.305 1.226l.119.333.324-.142c.292-.13.53-.153.671-.064.122.077.197.256.202.476a.771.771 0 01-.196.534c-.109.112-.251.165-.438.165-.814 0-1.338-.631-1.338-1.609 0-1.136 1.115-3.483 4.564-3.483 2.157 0 3.534.659 4.011 1.939a5.32 5.32 0 01-.207-.06c-.365-.11-.864-.26-1.372-.26-1.427 0-2.35.916-2.35 2.332 0 1.415 1.414 5.019 3.187 5.019.99 0 1.369-.673 1.647-1.164.22-.389.329-.547.528-.547.637 0 1.391.573 1.748 1.674-.66-.079-1.159.012-1.485.273-.188.151-.411.435-.411.941 0 .614.461 1.011.865 1.362.386.332.718.62.718 1.036 0 .935-.944 1.487-1.706 1.713.225-.442.34-.93.34-1.444 0-1.224-1.157-1.866-2.302-1.866-1.267 0-1.562 1.1-1.8 1.983-.305 1.131-.57 1.818-1.668 1.818-4.953 0-7.965-3.4-8.383-8.012-.134-1.51-.071-3.044.268-4.514.487-2.218 1.525-4.29 2.916-6.099 2.783-3.654 6.656-6.325 10.489-8.924 1.927-1.305 3.885-2.583 5.727-4.076.911-.757 1.798-1.571 2.54-2.55.124-.163.235-.342.348-.517v38.609c-2.227 1.525-3.87.501-4.424.153l-.212-.13-.11.11a.91.91 0 00-.13.159l-.067.121a2.169 2.169 0 01-1.28 1.032l-.128.038a3.42 3.42 0 01-.988.141c-.629 0-1.218-.154-1.843-.318-.764-.2-1.714-.449-2.925-.449-.657 0-1.345-.056-2.047-.167a4.694 4.694 0 01-.256-.047l-.056-.011c-.118-.021-.194-.031-.259-.04a4.558 4.558 0 01-.699-.14l-.318-.014-41.608-.046-.04.004a2.285 2.285 0 01-.828-.006l-98.055-.111-.083.018c-9.527 4.408-18.538 10.598-27.252 16.584a889.418 889.418 0 01-6.578 4.489l-.088.06v2.368h4.987c1.202 0 2.181.978 2.181 2.181v11.318c0 .964-.647 1.825-1.572 2.094a2.195 2.195 0 01-2.451-.924l-.908-1.43c-1.871-2.975-7.079-3.6-11.118-3.6-6.061 0-11.102 2.397-14.418 4.559-.287-.973-.695-1.393-1.009-1.677m106.179-39.152l-46.193-.053c8.34-3.53 17.288-5.757 27.477-5.757 11.493 0 16.907 4.053 18.716 5.81m-164.57 48.807c-16.958 0-33.098-6.065-36.253-8.653l-.199-.163-.248.069c-5.753 1.611-10.194-.069-11.256-2.608a7.784 7.784 0 001.323-1.171c3.086 2.977 6.794 2.394 9.345 1.679l.25-.069a2.204 2.204 0 011.967.412l.201.164c2.316 1.9 17.715 8.159 34.87 8.159 40.748 0 64.968-16.64 86.336-31.32C244.68 106.645 261.85 94.85 286.02 94.85c8.098 0 18.493 2.816 22.748 8.981l-2.67-.003c-.981-1.208-6.269-6.797-20.078-6.797-23.493 0-40.391 11.608-58.282 23.899-21.631 14.86-46.15 31.703-87.572 31.703M97.901 128.36c10.727-5.557 20.893-12.202 30.919-18.759a993.738 993.738 0 018.942-5.799c.213.061.437.127.686.201 2.251.671 6.018 1.795 11.715 1.795 26.034 0 42.884-11.165 60.725-22.985 18.716-12.4 38.069-25.222 70.065-25.222 14.552 0 22.555 3.222 26.106 5.211-.868 1.9-1.307 3.974-1.307 6.167 0 2.325 1.291 7.498 6.131 12.141 7.053 6.765 17.347 8.186 24.741 8.186 9.291 0 16.863-2.596 21.897-7.506.237-.231 1.662-1.86 2.767-3.411.51 4.478 2.004 8.72 6.248 13.836-2.54 4.565-10.81 9.8-18.276 11.661l-40.018-.045c-1.525-2.276-4.297-4.488-7.694-6.122-4.427-2.13-9.797-3.256-15.528-3.256-24.293 0-41.512 11.829-59.742 24.352-21.321 14.648-45.487 31.25-86.112 31.25-17.057 0-32.328-6.189-34.621-8.07l-.199-.163a2.604 2.604 0 00-2.324-.487l-.25.069c-3.927 1.1-6.712.604-8.974-1.598 2.882-3.424 4.001-9.374 4.103-11.446m-50.794 12.7c-16.941 0-25.494-5.854-25.579-5.913l-.325-.229-1.992 1.846c-.531-.418-1.594-1.274-2.297-1.977a27.772 27.772 0 002.752-3.21c1.916 1.77 5.543 3.525 10.076 4.864 5.325 1.572 11.492 2.439 17.365 2.439 31.157 0 55.976-16.232 79.981-31.93 20.713-13.548 40.279-26.344 61.559-26.344 5.661 0 10.755 1.299 13.793 3.492-.745.482-1.491.96-2.238 1.435-.939-.668-4.431-2.746-11.555-2.746-20.628 0-39.932 12.624-60.367 25.989-24.27 15.872-49.365 32.284-81.173 32.284M21.674 92.766c3.569.957 8.815 2.281 16.12 2.281 28.945 0 50.535-12.989 71.415-25.552 20.807-12.518 42.324-25.463 71.357-25.463 12.754 0 20.197 2.942 22.347 4.494l.383.296a2.598 2.598 0 001.955.505 2.591 2.591 0 001.72-1.059l.293-.414c.979-1.377 4.507-3.301 9.059-3.193-3.253 5.147-4.547 11.153-3.644 16.954.641 4.116 3.217 8.718 6.457 11.595-3.469 2.177-6.859 4.408-10.217 6.633a761.86 761.86 0 01-6.125 4.024c-3.091-2.294-8.33-3.657-14.147-3.657-21.399 0-41.012 12.827-61.779 26.41-23.953 15.664-48.722 31.863-79.761 31.863-12.216 0-23.429-3.698-27.207-7.232 8.418-11.823 6.352-28.391 1.774-38.485m16.12-.296c28.227 0 49.507-12.802 70.085-25.183 21.109-12.699 42.937-25.832 72.687-25.832 17.179 0 23.83 4.961 23.896 5.011l.406.312.295-.417c2.021-2.842 8.715-5.625 15.817-3.567-4.562 4.979-6.759 11.965-5.754 18.424.72 4.621 3.042 8.363 6.399 10.444-.718.439-1.427.885-2.137 1.33-3.218-2.814-5.784-7.369-6.417-11.438-.892-5.731.484-11.916 3.772-16.971l.19-.29-.346-.016c-4.925-.227-8.661 1.82-9.747 3.348l-.293.413a2.19 2.19 0 01-1.455.897 2.19 2.19 0 01-1.654-.428l-.388-.299c-2.191-1.581-9.729-4.572-22.584-4.572-29.144 0-50.707 12.973-71.562 25.519-20.833 12.535-42.375 25.496-71.21 25.496-7.474 0-12.785-1.398-16.336-2.354a30.704 30.704 0 00-1.82-3.342c4.306 1.811 10.89 3.515 18.156 3.515m-15.768-8.458c.337.156.668.316 1.003.48 2.606 1.268 5.561 2.705 13.327 2.705 11.634 0 31.309-6.688 37.747-18.029a91.626 91.626 0 01-.683 2.269c-1.15 3.685-2.322 7.508-1.426 13.548-10.361 3.962-21.475 6.499-34.2 6.499-7.739 0-14.651-1.967-18.785-3.896.798-.997 2.335-2.824 3.017-3.576m26.702-4.137c.083-.611.119-1.192.129-1.756 1.867.683 4.226 1.336 7.999 1.336 2.458 0 4.479-.515 6.134-1.1-.752.451-1.528.894-2.347 1.321-.976.509-1.968.976-2.965 1.423-.907.306-6.289 1.078-8.95-1.224m-2.106-9.463c2.23 1.051 4.94 1.628 7.812 1.628 5.87 0 8.988-1.683 12.218-3.499-.665 2.584-1.048 5.188-.499 7.726-.444.326-.904.646-1.377.963-1.999.834-4.478 1.828-7.92 1.828-3.799 0-6.141-.672-7.997-1.36-.039-2.905-.992-5.209-2.237-7.286m-2.839-4.19c3.242 2.428 7.702 3.24 10.651 3.24 3.104 0 10.174-1.554 13.717-6.019-.162.548-.329 1.098-.501 1.659a89.711 89.711 0 00-.857 2.905l-.123.069c-3.261 1.834-6.341 3.567-12.236 3.567-3.059 0-5.931-.661-8.203-1.864a58.528 58.528 0 00-1.624-2.38 94.38 94.38 0 01-.824-1.177m17.134-4.409c.164-.852.233-1.909.114-2.738l.073.046c.293.214.61.682.61 1.356 0 .416-.273.91-.797 1.336m.186 5.294c-2.416.911-4.809 1.313-6.362 1.357.101-2.643-.584-4.341-1.257-5.974l-.081-.203c1.198 1.005 2.757 1.491 4.317 1.491 1.583 0 2.875-.488 3.752-1.179-.05.234-.102.462-.155.687-.269 1.136-.497 2.237-.214 3.821m.577-8.785c-.449-.323-.975-.421-1.444-.264l-.498.166.196.486c.388.967.062 3.144-.212 3.759a5.953 5.953 0 01-2.002.324c-2.521 0-5.464-1.45-5.464-5.533 0-6.114 7.289-6.424 8.751-6.424 4.011 0 8.273 2.299 8.273 6.56 0 4.789-3.493 7.705-7.241 9.336-.192-1.276-.004-2.199.238-3.219.197-.839.422-1.789.422-3.036 0-.875-.39-1.701-1.019-2.155m-20.89 1.187l-.004-.019a10.6 10.6 0 01-.102-1.478c0-8.664 9.095-13.339 17.653-13.339 11.611 0 16.901 8.725 16.901 16.832 0 5.059-2.869 9.921-8.203 14.102-.555-3.293.508-6.806 1.557-10.214.86-2.795 1.674-5.435 1.674-7.997 0-4.901-4.77-7.545-9.259-7.545-4.707 0-9.737 1.946-9.737 7.409 0 2.446.662 4.051 1.302 5.605.664 1.61 1.283 3.147 1.184 5.592-4.558-.183-11.999-2.241-12.966-8.948m101.246 41.597c15.558-9.675 30.735-17.333 46.611-17.333 6.111 0 9.433 1.605 10.641 2.344-14.132 8.901-28.794 16.118-49.125 16.118-3.877 0-6.059-.565-8.127-1.129m138.917-46.093c19.378 0 27.806 5.604 29.569 6.966-.696.902-2.193 3.276-2.193 6.99 0 3.749 4.802 17.749 28.295 17.749 8.605 0 15.554-2.343 20.098-6.774 2.265-2.209 3.564-4.523 4.315-6.531.01 1.506.055 2.949.188 4.364-1.109 1.628-2.73 3.484-2.981 3.729-4.958 4.836-12.435 7.393-21.62 7.393-7.322 0-17.509-1.401-24.467-8.076-4.743-4.55-6.008-9.592-6.008-11.854 0-2.198.452-4.273 1.346-6.165l.078-.166-.159-.091c-3.502-1.999-11.597-5.353-26.461-5.353-32.116 0-51.519 12.856-70.285 25.289-17.789 11.786-34.591 22.918-60.505 22.918-5.639 0-9.371-1.113-11.601-1.778l-.355-.105c.896-.571 1.791-1.139 2.684-1.7l.694.187c2.086.57 4.45 1.215 8.578 1.215 25.256 0 41.793-10.956 59.301-22.555 19.034-12.611 38.717-25.652 71.489-25.652m61.268 20.801c.976.499 2.046.75 3.115.75 1.596 0 3.18-.552 4.419-1.623-.006 2.453.205 5.105 1.022 7.759-1.766.825-3.643 1.457-5.535 1.932-.159-2.798-1.515-5.824-3.021-8.818m-2.479-4.954c1.403 1.276 3.22 2.094 5.166 2.094 2.549 0 4.09-.89 4.996-1.999a78.261 78.261 0 00-.145 3.442c-2.084 2.03-5.397 2.341-7.862.778l-.449-.877a95.747 95.747 0 01-1.706-3.438m10.288-2.936c0 .995-.474 2.447-1.969 3.314.018-1.121-.208-2.641-.879-3.486.079-.566.513-1.548 1.447-1.548.677 0 1.401.452 1.401 1.72m-1.902-11.404c7.007 0 12.927 5.388 12.927 11.764 0 6.762-4.089 11.231-9.383 13.959-1.187-3.984-.97-8.023-.779-11.303.062-1.086.122-2.111.122-3.016 0-1.859-1.237-2.705-2.386-2.705-1.596 0-2.445 1.571-2.445 2.705v.203l.144.145c.635.634.826 2.421.721 3.403-.599.185-1.306.294-2.141.294-3.64 0-6.834-3.194-6.834-6.835 0-5.474 3.664-8.614 10.054-8.614m7.3 47.363l-4.688-.005c7.097-2.128 14.559-7.006 17.07-11.339.317.375.646.754.993 1.139-1.081 3.305-7.058 8.931-13.375 10.205m58.213-43.946a2.817 2.817 0 00-2.813 2.814c0 1.363.973 2.501 2.261 2.759-.246 1.921-1.854 3.541-3.439 4.879-1.772 1.453-3.712 2.739-5.633 4.057-3.827 2.63-7.761 5.359-10.639 9.177-1.436 1.89-2.522 4.081-3.021 6.426-.462 2.076-.429 4.222-.03 6.302.021.112.039.226.063.335.032.153.195.777.242.937.076.261.159.511.248.756.083.225.159.448.256.667.214.491.452.95.716 1.374.026.041.056.078.082.119.294.457.615.872.957 1.253.044.049.085.101.131.15.4.428.823.808 1.267 1.144l.019.017.034.022c.404.302.819.572 1.244.804l-36.857-.042c5.579-2.296 10.334-7.252 11.102-10.212l.067-.258-.18-.198c-7.792-8.533-7.748-14.456-7.688-22.654.006-.741.011-1.5.011-2.281 0-6.911-6.372-12.75-13.913-12.75-6.913 0-11.039 3.589-11.039 9.6 0 2.833 1.692 6.128 3.483 9.615 1.774 3.454 3.583 7.013 3.694 10.121-2.644.585-5.282.862-7.642.862-22.674 0-27.309-13.222-27.309-16.763 0-4.314 2.235-6.687 2.258-6.711l.345-.358-.361-.342c-.324-.308-8.206-7.53-30.604-7.53-25.372 0-42.93 7.73-58.384 17.059-3.345-1.864-5.665-5.492-6.369-10.02-.999-6.413 1.314-13.372 6.033-18.161l.552-.561-.747-.251c-7.615-2.569-14.779.196-17.385 3.316-1.714-1.075-8.935-4.941-24.087-4.941-30.024 0-51.971 13.204-73.196 25.973-11.363 6.836-22.402 13.451-34.43 18.172-.802-5.675.269-9.192 1.42-12.883.917-2.939 1.864-5.978 1.864-10.226 0-11.698-8.999-17.817-17.887-17.817-9.036 0-18.638 5.02-18.638 14.324 0 .546.039 1.068.106 1.574.013.091.036.176.05.266.502 3.222 2.241 5.708 3.946 8.117 2.428 3.429 4.722 6.668 3.914 12.019l-.036.252.181.176c1.661 1.608 4.279 2.043 6.474 2.043l.042-.001c-6.794 2.565-13.55 3.753-18.02 3.753-7.538 0-10.384-1.385-12.895-2.606-.451-.219-.894-.435-1.352-.638l-.31-.138-.239.24c-.584.583-3.1 3.585-3.722 4.412l-.221.297.223.296c6.768 8.966 12.059 32.785-1.959 46.346l-.338.326.31.353c.925 1.052 2.998 2.636 3.087 2.704l.329.251 2.028-1.879c1.758 1.109 10.209 5.871 25.81 5.871 18.485 0 34.685-5.474 49.762-13.158-.298 2.712-1.817 9.55-5.506 11.763l-.326.196.106.365c.932 3.207 5.789 5.438 12.348 3.69 4.179 3.161 20.785 8.716 36.675 8.716 36.343 0 59.732-12.846 79.533-26.032v6.037h7.167v7.13c-1.427-1.589-4.702-3.824-12.882-3.824-9.773 0-15.849 4.429-16.441 5.835-.162.382.014.623.098.709.056.057.12.116.191.178.409.367 1.096.981 1.096 4.089 0 1.603-.565 4.217-1.162 6.985-.783 3.624-1.669 7.731-1.669 11.092 0 4.709 3.677 9.714 10.491 9.714 7.068 0 9.577-4.471 9.577-8.299 0-.821-.114-1.815-.236-2.867-.363-3.154-.792-7.042 1.606-8.631 9.376 3.015 14.41 11.796 14.468 11.903l.516.952.38-1.013c.356-.954 2.402-6.294 2.924-7.658h156.029c2.008 0 3.279.632 4.749 1.362 1.947.967 4.152 2.062 8.566 2.062 1.739 0 2.084.576 2.563 1.372.679 1.128 1.525 2.533 5.902 2.533h.493V65.517a2.814 2.814 0 002.332-2.766 2.818 2.818 0 00-2.816-2.814"
        }
      ></path>

      <path
        d={
          "M38.792 105.856l-.045.205c.247.271.381.915.146 1.416l-8.502 16.981c-.214.413-.484.661-.79.931l-.033.146 4.276.949.046-.205c-.137-.491-.205-.875.058-1.37l1.496-2.863 2.87.637.089 3.062c.029.559-.228 1.025-.618 1.399l-.046.205 4.569 1.014.039-.175c-.215-.417-.345-.937-.355-1.585l-.095-20.057zm-.261 9.346l-.097 4.588-1.816-.403zm7.504-7.845l.013.21c.333.551.571 1.018.604 1.587l1.024 17.31c.033.569-.146 1.09-.414 1.647l.013.21 4.671-.277-.012-.209c-.421-.516-.691-1.011-.725-1.58l-.368-6.229 1.318-.078c3.594-.213 5.836-2.96 5.602-6.913-.225-3.803-2.562-6.22-5.856-6.025zm5.919 9.628l-1.288.076-.42-7.098.689-.041c1.707-.1 2.9 1.272 3.03 3.458.123 2.096-.664 3.525-2.011 3.605zm6.813-10.57l.05.204c.429.481.748.896.886 1.45l4.18 16.828c.137.553.056 1.099-.105 1.695l.051.204 4.542-1.128-.051-.204c-.508-.43-.864-.867-1.002-1.42l-1.504-6.056 1.281-.318c3.494-.868 5.194-3.98 4.24-7.823-.919-3.698-3.659-5.644-6.862-4.849zm7.583 8.38l-1.252.31-1.714-6.9.67-.166c1.66-.412 3.084.718 3.612 2.843.506 2.038-.006 3.587-1.316 3.913zm5.752-12.011l.077.195c.478.392.872.816 1.07 1.318l6.382 16.123c.199.503.202 1.082.122 1.694l.077.196 8.787-3.478-1.59-4.017-.111.044c-.779 1.212-1.025 1.567-1.555 1.777l-2.957 1.171-5.863-14.812c-.21-.53-.191-1.054-.094-1.705l-.077-.196zm11.9-4.962l.094.188c.523.376.952.698 1.206 1.208l7.741 15.516c.255.51.267 1.074.24 1.691l.094.188 4.107-2.049-.094-.188c-.523-.376-.952-.698-1.206-1.209l-7.741-15.516c-.254-.51-.267-1.073-.24-1.69l-.094-.188zm25.592 4.497l-.104.061c-.115.277-.914 2.174-2.466 3.086-1.914 1.125-4.601-.427-6.654-3.918-2.493-4.242-2.74-7.681-.775-8.836 1.345-.791 3.53-.092 3.971.066l.089-.087-2.467-3.839c-.328-.086-1.731.252-3.205 1.118-3.982 2.342-4.329 7.731-.923 13.524 3.102 5.276 7.797 7.283 11.728 4.972 1.241-.73 2.341-1.759 2.682-2.482zm-1.58-18.878l.117.174c.366.007.924.355 1.126.871l6.424 17.871c.151.44.144.806.128 1.214l.084.125 3.637-2.44-.117-.175c-.45-.24-.775-.455-.951-.987l-1.041-3.059 2.442-1.638 2.277 2.049c.426.365.585.872.587 1.413l.117.174 3.886-2.607-.1-.15c-.45-.131-.916-.396-1.392-.836l-14.583-13.771zm6.584 6.637l3.254 3.236-1.545 1.036zm21.469.403l-.11-.179c-.632-.279-1.115-.544-1.415-1.029l-8.394-13.538 1.351-.838c.408-.253 1.003-.375 1.944-.394l.433.014.102-.063-2.198-3.544-9.688 6.007 2.197 3.544.102-.063.179-.394c.436-.834.81-1.313 1.218-1.566l1.351-.838 8.394 13.539c.301.484.324 1.034.293 1.724l.111.179zm-2.562-22.739l.1.185c.534.36.972.669 1.243 1.171l8.214 15.271c.27.502.3 1.065.292 1.682l.1.185 4.042-2.174-.1-.185c-.534-.36-.973-.669-1.243-1.171l-8.214-15.271c-.27-.502-.301-1.065-.292-1.682l-.1-.185zm14.754 3.896c2.353 6.037 6.588 9.055 10.474 7.541 3.913-1.525 4.955-6.536 2.634-12.489-2.342-6.01-6.5-8.994-10.413-7.469-3.885 1.515-5.005 6.491-2.695 12.417zm9.297 4.522c-1.649.643-3.906-1.761-5.573-6.038-1.613-4.137-1.556-7.379.093-8.022 1.677-.653 3.889 1.801 5.578 6.133 1.591 4.081 1.579 7.274-.098 7.927zm17.97-22.928l.025.208c.452.49.662.978.73 1.544l.873 7.237-5.53-8.518-3.842.463.025.209c.362.5.625.921.7 1.547l2.077 17.215c.065.536-.109 1.101-.345 1.643l.028.238 4.587-.553-.029-.238c-.422-.493-.661-.978-.726-1.514l-1.312-10.871 8.143 11.89 1.221-.147-2.296-19.032c-.065-.536.049-1.094.282-1.666l-.025-.209zm13.472 15.839l-.238-.033-.469 4.024c.273.431 1.222 1.23 3.212 1.507 3.269.455 5.782-1.497 6.25-4.854.38-2.734-.631-5.48-2.937-8.709-.759-1.075-1.077-2.058-.924-3.157.112-.803.763-1.56 1.624-1.44 1.219.17 2.029 1.312 2.379 2.058l.238.033.452-4.117c-.187-.178-1.126-.611-2.671-.827-3.061-.426-5.33 1.076-5.702 3.75-.31 2.228.325 4.195 1.843 6.345 1.671 2.353 2.42 4.153 2.205 5.698-.24 1.724-1.357 2.568-2.576 2.398-1.604-.223-2.3-1.32-2.686-2.676z"
        }
      ></path>

      <text transform={"translate(326.382 131.852)"}>
        <tspan
          x={"-80.99"}
          y={"13.5"}
          fontFamily={"Blackriver-Bold"}
          fontSize={"30"}
        >
          Interfaces
        </tspan>
      </text>

      <path
        d={
          "M139.569 124.324c.277-5.934-3.658-10.442-10.161-10.745-6.203-.289-10.141 4.303-10.328 8.319-.161 3.446 2.658 4.839 5.036 3.418l.011-.24c-.898-.703-1.223-1.468-1.156-2.907.146-3.117 3.229-4.835 6.256-4.694 4.435.207 6.603 3.311 6.446 6.667-.153 3.297-2.148 6.147-5.545 6.229l.397-8.541c.027-.569.386-1.183.735-1.587l.01-.21-5.125-.239-.009.21c.337.496.579 1.108.552 1.678l-1.124 24.123c-.026.57-.354 1.155-.705 1.589l-.009.21 5.124.239.01-.21c-.339-.466-.61-1.08-.584-1.649l.559-11.987c6.034.041 9.385-4.848 9.61-9.673zm16.044 16.877l-.021-.209a5.684 5.684 0 01-1.043-1.436l-3.462-7.078c1.505-.96 2.872-3.323 2.585-6.279-.34-3.494-2.719-5.644-5.944-5.33l-5.793.563.021.209c.351.508.612 1.026.664 1.563l1.678 17.259c.052.537-.104 1.095-.351 1.661l.021.209 4.508-.438-.02-.209c-.425-.652-.588-1.088-.634-1.566l-.671-6.897 1.015-.099 3.505 8.46zm-7.74-11.093l-1.015.099-.572-5.882.597-.059c1.792-.174 2.924.62 3.121 2.651.186 1.911-.967 3.078-2.131 3.191zm9.404.167c1.347 6.338 5.04 10 9.119 9.133 4.108-.874 5.945-5.65 4.615-11.9-1.341-6.309-4.963-9.925-9.071-9.052-4.078.868-5.986 5.598-4.663 11.819zm8.445 5.964c-1.731.368-3.571-2.369-4.526-6.859-.923-4.343-.344-7.533 1.387-7.901 1.761-.375 3.548 2.404 4.515 6.953.911 4.284.384 7.432-1.376 7.807zm20.029-14.583l-.071-.198-4.293 1.537.071.198c.434.322.812.665.963 1.089l2.175 6.072c-.055.115-.246.471-.755.653-1.525.546-4.507-1.732-5.893-5.602-1.678-4.688-1.101-7.348 1.271-8.198 1.412-.505 2.856-.034 3.875.588l.113-.04-1.355-3.785c-.719-.316-1.99-.753-4.08-.005-4.039 1.447-5.714 6.38-3.439 12.735 2.053 5.733 6.592 8.888 10.32 7.553 2.231-.799 3.592-2.338 3.47-4.46l-2.316-6.468a2.93 2.93 0 01-.056-1.669zm19.315 3.067l-.096-.186a5.704 5.704 0 01-1.499-.951l-5.824-5.307c1.045-1.446 1.446-4.147.091-6.79-1.602-3.123-4.606-4.246-7.489-2.767l-5.178 2.656.096.187c.513.343.946.728 1.193 1.209l7.914 15.428c.246.481.306 1.057.285 1.674l.096.187 4.031-2.067-.096-.187c-.635-.45-.947-.795-1.166-1.222l-3.163-6.167.907-.465 6.374 6.576zm-11.281-7.464l-.907.465-2.697-5.258.533-.274c1.602-.822 2.947-.5 3.878 1.315.876 1.709.234 3.218-.807 3.752zm7.413-15.015l.109.18c.365.025.906.4 1.082.924l5.546 18.163c.129.447.104.812.069 1.219l.077.128 3.752-2.259-.108-.18c-.438-.262-.752-.493-.902-1.033l-.891-3.106 2.519-1.517 2.175 2.157c.407.385.542.9.517 1.44l.108.18 4.009-2.415-.093-.154c-.443-.154-.896-.441-1.349-.903l-13.896-14.465zm6.253 6.95l3.093 3.391-1.594.96zm18.186-21.704l-.112-.177-3.825 2.428 1.208 8.117-7.059-4.403-3.647 2.315.113.177c.651.298 1.012.531 1.237.885l9.405 14.817c.306.481.376 1.041.336 1.705l.113.178 3.825-2.428-.113-.177c-.52-.203-.964-.455-1.269-.936l-6.672-10.511 7.309 4.35.279-.177-.851-8.45 6.592 10.385c.305.481.411.983.463 1.625l.112.177 3.647-2.315-.112-.177c-.568-.28-1-.68-1.274-1.111l-9.293-14.639c-.305-.482-.424-.726-.412-1.658zm19.092-11.598l-.106-.182-3.915 2.279.894 8.157-6.884-4.672-3.734 2.173.106.182c.639.322.991.569 1.202.932l8.827 15.168c.287.493.336 1.054.27 1.717l.106.182 3.915-2.279-.105-.181c-.512-.223-.946-.492-1.232-.984l-6.262-10.761 7.136 4.629.285-.166-.524-8.476 6.186 10.63c.287.493.373.998.4 1.642l.106.182 3.734-2.173-.106-.182a3.144 3.144 0 01-1.23-1.159l-8.721-14.987c-.287-.492-.397-.741-.348-1.671zm8.087-4.028l.076.196c.485.424.881.785 1.086 1.317l6.235 16.181c.205.532.164 1.094.079 1.705l.075.196 4.283-1.65-.075-.196c-.485-.424-.882-.786-1.087-1.317l-6.234-16.181c-.205-.532-.165-1.094-.079-1.706l-.076-.195zm25.392-4.922l-.002.21c.384.545.528 1.056.522 1.626l-.081 7.29-4.369-9.169-3.87-.043-.002.21c.294.544.499.996.492 1.626l-.191 17.339c-.006.54-.252 1.077-.558 1.584l-.002.24 4.62.051.002-.24c-.354-.544-.528-1.056-.522-1.596l.12-10.949 6.519 12.852 1.23.014.211-19.169c.006-.54.192-1.078.498-1.615l.003-.21zm24.624 15.704l.061-.201-4.364-1.321-.061.201c.157.518.256 1.018.126 1.449l-1.869 6.173c-.113.06-.478.232-.995.075-1.55-.469-2.59-4.075-1.399-8.009 1.443-4.766 3.49-6.56 5.902-5.83 1.436.435 2.315 1.673 2.763 2.78l.115.035 1.165-3.848c-.389-.682-1.151-1.79-3.275-2.433-4.106-1.243-8.39 1.723-10.345 8.183-1.765 5.829.003 11.066 3.793 12.214 2.269.686 4.278.26 5.444-1.518l1.99-6.576c.148-.488.494-1.01.949-1.374z"
        }
      ></path>
    </svg>
  )
}

export default ApiHomepageIcon
/* prettier-ignore-end */
