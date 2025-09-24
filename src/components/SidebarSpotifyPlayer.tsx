import { useState, useEffect } from "react";
import { Play, Pause, ExternalLink, Music, X, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SidebarSpotifyPlayer = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const artistId = "4u6CXYhXWPcFgS61TH73r0"; // ID do artista fornecido
  const spotifyEmbedUrl = `https://open.spotify.com/embed/artist/${artistId}?utm_source=generator&theme=0`;
  const spotifyOpenUrl = `https://open.spotify.com/artist/${artistId}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sidebar Player */}
      <div className="hidden lg:block">
        <div className={`fixed top-1/2 right-6 transform -translate-y-1/2 z-50 transition-all duration-300 ${
          isMinimized ? 'w-16' : 'w-80'
        }`}>
          <div className="bg-card/95 backdrop-blur-lg rounded-xl shadow-elegant border border-border">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              {!isMinimized && (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.299z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-sm text-card-foreground">
                      Gimenes Produções
                    </h4>
                    <p className="font-inter text-xs text-muted-foreground">
                      Spotify Player
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 h-7 w-7 hover:bg-primary/10"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="p-1 h-7 w-7 hover:bg-primary/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Player Content */}
            {!isMinimized && (
              <div className="p-4">
                <div className="space-y-4">
                  {/* Spotify Embed */}
                  <div className="w-full">
                    <iframe
                      src={spotifyEmbedUrl}
                      width="100%"
                      height="380"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                      title="Spotify Player - Gimenes Produções"
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(spotifyOpenUrl, '_blank')}
                      className="font-inter text-xs flex-1 mr-2"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Abrir no Spotify
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Minimized State */}
            {isMinimized && (
              <div className="p-3 flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.299z"/>
                  </svg>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1"
                >
                  {isPlaying ? (
                    <Pause className="h-3 w-3" />
                  ) : (
                    <Play className="h-3 w-3" />
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Player */}
      <div className="lg:hidden">
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-elegant">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Player Info */}
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.299z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-inter font-semibold text-sm text-card-foreground truncate">
                    Gimenes Produções
                  </h4>
                  <p className="font-inter text-xs text-muted-foreground truncate">
                    Ouça no Spotify
                  </p>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-primary/10"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(spotifyOpenUrl, '_blank')}
                  className="p-2 hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-primary/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSpotifyPlayer;