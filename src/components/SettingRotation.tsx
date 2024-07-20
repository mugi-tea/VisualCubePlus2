/**@jsxImportSource @emotion/react */

import { PNGVisualizerOptions } from "sr-puzzlegen";
import { Colors, Shadow, getSpace } from "../lib/variables";
import { useEffect, useState } from "react";

type Props = {
  config: PNGVisualizerOptions;
  setConfig: React.Dispatch<React.SetStateAction<PNGVisualizerOptions>>;
};

export const SettingRotation = ({ config, setConfig }: Props) => {
  const [valueX, setValueX] = useState("");
  const [valueY, setValueY] = useState("");
  const [valueZ, setValueZ] = useState("");
  const [valueXSum, setValueXSum] = useState(0);
  const [valueYSum, setValueYSum] = useState(0);
  const [valueZSum, setValueZSum] = useState(0);

  const [temporaryConfig, setTemporaryConfig] =
    useState<PNGVisualizerOptions>();

  useEffect(() => {
    setTemporaryConfig(config);
  }, []);

  useEffect(() => {
    const sums = config.puzzle?.rotations?.reduce(
      (acc: any, item) => {
        if (item.x !== undefined) acc.x += item.x;
        if (item.y !== undefined) acc.y += item.y;
        if (item.z !== undefined) acc.z += item.z;
        return acc;
      },
      { x: 0, y: 0, z: 0 }
    );

    console.log(sums);
    if (sums !== undefined) {
      setValueXSum(sums.x);
      setValueYSum(sums.y);
      setValueZSum(sums.z);
    }
  }, [config]);

  return (
    <>
      <div>
        <div css={{ display: "flex", alignItems: "center", gap: getSpace(1) }}>
          <div>X</div>
          <input
            css={{
              backgroundColor: Colors.baseColor,
              height: 8,
              borderRadius: 4,
              boxShadow: Shadow.normal,
              width: 300,
            }}
            min={-180}
            max={180}
            type="range"
            value={valueX}
            onMouseUp={(e) => {
              console.log(e.target.value);
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      x: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
              setValueX("0");
              setTemporaryConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      x: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
            }}
            onChange={(e) => {
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    { x: Number(e.target.value) ?? 0 },
                  ],
                },
              });
              setValueX(e.target.value);
            }}
          />
          <div>{valueXSum ?? 0}</div>
        </div>
        <div css={{ display: "flex", alignItems: "center", gap: getSpace(1) }}>
          <div>Y</div>
          <input
            css={{
              backgroundColor: Colors.baseColor,
              height: 8,
              borderRadius: 4,
              boxShadow: Shadow.normal,
              width: 300,
            }}
            min={-180}
            max={180}
            type="range"
            value={valueY}
            onMouseUp={(e) => {
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      y: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
              setValueY("0");
              setTemporaryConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      y: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
            }}
            onChange={(e) => {
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    { y: Number(e.target.value) ?? 0 },
                  ],
                },
              });
              setValueY(e.target.value);
            }}
          />
          <div>{valueYSum ?? 0}</div>
        </div>
        <div css={{ display: "flex", alignItems: "center", gap: getSpace(1) }}>
          <div>Z</div>
          <input
            css={{
              backgroundColor: Colors.baseColor,
              height: 8,
              borderRadius: 4,
              boxShadow: Shadow.normal,
              width: 300,
            }}
            min={-180}
            max={180}
            type="range"
            value={valueZ}
            onMouseUp={(e) => {
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      z: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
              setValueZ("0");
              setTemporaryConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    {
                      z: Number(e.target.value) ?? 0,
                    },
                  ],
                },
              });
            }}
            onChange={(e) => {
              setConfig({
                ...temporaryConfig,
                puzzle: {
                  ...temporaryConfig?.puzzle,
                  rotations: [
                    ...(temporaryConfig?.puzzle?.rotations ?? []),
                    { z: Number(e.target.value) ?? 0 },
                  ],
                },
              });
              setValueZ(e.target.value);
            }}
          />
          <div>{valueZSum ?? 0}</div>
        </div>
        <button
          onClick={() =>
            setConfig({
              ...config,
              puzzle: {
                ...config?.puzzle,
                rotations: [
                  { y: 45 },

                  {
                    x: 34,
                  },
                ],
              },
            })
          }
        >
          リセット
        </button>
      </div>
    </>
  );
};
