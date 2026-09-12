import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';
import { profile } from '@/data/profile';

export const alt = `${profile.name} - ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const CONTOUR_PATTERN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900' viewBox='0 0 900 900'%3E%3Cg fill='none' stroke='%2322d3ee' stroke-width='1.5'%3E%3Ccircle cx='450' cy='450' r='100'/%3E%3Ccircle cx='450' cy='450' r='180'/%3E%3Ccircle cx='450' cy='450' r='260'/%3E%3Ccircle cx='450' cy='450' r='340'/%3E%3Ccircle cx='450' cy='450' r='420'/%3E%3C/g%3E%3C/svg%3E";

export default async function OpengraphImage() {
  const appDir = path.join(process.cwd(), 'src/app');
  const photo = fs.readFileSync(path.join(appDir, 'opengraph-image-photo.jpg')).toString('base64');
  const [interRegular, interSemibold, interExtrabold, jbMono] = await Promise.all([
    fs.promises.readFile(path.join(appDir, 'og-font-inter-regular.ttf')),
    fs.promises.readFile(path.join(appDir, 'og-font-inter-semibold.ttf')),
    fs.promises.readFile(path.join(appDir, 'og-font-inter-extrabold.ttf')),
    fs.promises.readFile(path.join(appDir, 'og-font-jbmono-medium.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#080c10',
          backgroundImage: 'linear-gradient(135deg, #080c10 0%, #0b1720 45%, #0a2530 100%)',
          padding: '64px',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-250px',
            right: '-250px',
            width: '900px',
            height: '900px',
            display: 'flex',
            opacity: 0.14,
            backgroundImage: `url(${CONTOUR_PATTERN})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '900px 900px',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: text column */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '999px',
                  backgroundColor: '#22d3ee',
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '22px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#22d3ee',
                }}
              >
                {profile.role}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '28px',
                fontSize: '68px',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#f8fafc',
              }}
            >
              {profile.name}
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: '24px',
                fontSize: '25px',
                fontWeight: 400,
                lineHeight: 1.45,
                color: '#94a3b8',
              }}
            >
              {profile.tagline}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '44px',
                fontFamily: 'JetBrains Mono',
                fontSize: '19px',
                color: '#64748b',
              }}
            >
              <span>{profile.location}</span>
              <span style={{ color: '#22d3ee' }}>&#8226;</span>
              <span>Spacenus GmbH</span>
            </div>
          </div>

          {/* Right: portrait */}
          <div
            style={{
              display: 'flex',
              width: '420px',
              height: '420px',
              borderRadius: '28px',
              border: '2px solid #1e4a55',
              overflow: 'hidden',
              boxShadow: '0 0 0 8px rgba(34, 211, 238, 0.06)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/jpeg;base64,${photo}`}
              width={420}
              height={420}
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interSemibold, weight: 600, style: 'normal' },
        { name: 'Inter', data: interExtrabold, weight: 800, style: 'normal' },
        { name: 'JetBrains Mono', data: jbMono, weight: 500, style: 'normal' },
      ],
    }
  );
}
